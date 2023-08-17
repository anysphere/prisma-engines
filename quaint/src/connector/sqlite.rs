mod conversion;
mod error;

pub use libsql::{params_from_iter, version as sqlite_version};

use super::IsolationLevel;
use crate::{
    ast::{Query, Value},
    connector::{metrics, queryable::*, ResultSet},
    error::{Error, ErrorKind},
    visitor::{self, Visitor},
};
use async_trait::async_trait;
use std::{convert::TryFrom, path::Path, time::Duration};
use tokio::sync::Mutex;

pub(crate) const DEFAULT_SQLITE_SCHEMA_NAME: &str = "main";

/// The underlying sqlite driver. Only available with the `expose-drivers` Cargo feature.
#[cfg(feature = "expose-drivers")]
pub use libsql;

/// A connector interface for the SQLite database
#[cfg_attr(feature = "docs", doc(cfg(feature = "sqlite")))]
pub struct Sqlite {
    // TODO: should they be behind the same mutex?
    _db: Mutex<libsql::Database>,
    pub(crate) client: Mutex<libsql::Connection>,
}

/// Wraps a connection url and exposes the parsing logic used by Quaint,
/// including default values.
#[derive(Debug)]
#[cfg_attr(feature = "docs", doc(cfg(feature = "sqlite")))]
pub struct SqliteParams {
    pub connection_limit: Option<usize>,
    /// This is not a `PathBuf` because we need to `ATTACH` the database to the path, and this can
    /// only be done with UTF-8 paths.
    pub file_path: String,
    pub db_name: String,
    pub socket_timeout: Option<Duration>,
    pub max_connection_lifetime: Option<Duration>,
    pub max_idle_connection_lifetime: Option<Duration>,
}

impl TryFrom<&str> for SqliteParams {
    type Error = Error;

    fn try_from(path: &str) -> crate::Result<Self> {
        let path = if path.starts_with("file:") {
            path.trim_start_matches("file:")
        } else {
            path.trim_start_matches("sqlite:")
        };

        let path_parts: Vec<&str> = path.split('?').collect();
        let path_str = path_parts[0];
        let path = Path::new(path_str);

        if path.is_dir() {
            Err(Error::builder(ErrorKind::DatabaseUrlIsInvalid(path.to_str().unwrap().to_string())).build())
        } else {
            let mut connection_limit = None;
            let mut socket_timeout = None;
            let mut max_connection_lifetime = None;
            let mut max_idle_connection_lifetime = None;

            if path_parts.len() > 1 {
                let params = path_parts.last().unwrap().split('&').map(|kv| {
                    let splitted: Vec<&str> = kv.split('=').collect();
                    (splitted[0], splitted[1])
                });

                for (k, v) in params {
                    match k {
                        "connection_limit" => {
                            let as_int: usize = v
                                .parse()
                                .map_err(|_| Error::builder(ErrorKind::InvalidConnectionArguments).build())?;

                            connection_limit = Some(as_int);
                        }
                        "socket_timeout" => {
                            let as_int = v
                                .parse()
                                .map_err(|_| Error::builder(ErrorKind::InvalidConnectionArguments).build())?;

                            socket_timeout = Some(Duration::from_secs(as_int));
                        }
                        "max_connection_lifetime" => {
                            let as_int = v
                                .parse()
                                .map_err(|_| Error::builder(ErrorKind::InvalidConnectionArguments).build())?;

                            if as_int == 0 {
                                max_connection_lifetime = None;
                            } else {
                                max_connection_lifetime = Some(Duration::from_secs(as_int));
                            }
                        }
                        "max_idle_connection_lifetime" => {
                            let as_int = v
                                .parse()
                                .map_err(|_| Error::builder(ErrorKind::InvalidConnectionArguments).build())?;

                            if as_int == 0 {
                                max_idle_connection_lifetime = None;
                            } else {
                                max_idle_connection_lifetime = Some(Duration::from_secs(as_int));
                            }
                        }
                        _ => {
                            tracing::trace!(message = "Discarding connection string param", param = k);
                        }
                    };
                }
            }

            Ok(Self {
                connection_limit,
                file_path: path_str.to_owned(),
                db_name: DEFAULT_SQLITE_SCHEMA_NAME.to_owned(),
                socket_timeout,
                max_connection_lifetime,
                max_idle_connection_lifetime,
            })
        }
    }
}

impl TryFrom<&str> for Sqlite {
    type Error = Error;

    fn try_from(path: &str) -> crate::Result<Self> {
        let params = SqliteParams::try_from(path)?;
        let file_path = params.file_path;

        let db = libsql::Database::open(file_path)?;
        let conn = db.connect()?;

        // TODO(libsql): important: busy_timeout is not available
        //
        // if let Some(timeout) = params.socket_timeout {
        //     conn.busy_timeout(timeout)?;
        // };
        //
        // Without this, 20 tests fail in quaint (and probably many more would fail in the engines
        // themselves).
        //
        // The following workaround is functionally equivalent (including the default
        // timeout in rusqlite) but it's a bit better to use the `sqlite3_busy_timeout` function
        // rather than issue the pragma statement.
        {
            let timeout = params
                .socket_timeout
                .map(|duration| duration.as_millis())
                .unwrap_or(5000);
            // Note: PRAGMA statements cannot have parameters (it's a syntax error to write `PRAGMA
            // busy_timeout = ?` in a prepared statement), only the corresponding PRAGMA functions
            // can (though in the case of `SELECT * from pragma_busy_timeout` specifically there's
            // no argument to parametrize), but they only allow reading, not modifying information.
            // So we have to resort to formatting the query like this.
            conn.query(format!("PRAGMA busy_timeout({timeout})"), libsql::params![])?;
        }

        let client = Mutex::new(conn);

        Ok(Sqlite {
            _db: Mutex::new(db),
            client,
        })
    }
}

impl Sqlite {
    pub fn new(file_path: &str) -> crate::Result<Sqlite> {
        Self::try_from(file_path)
    }

    /// Open a new SQLite database in memory.
    pub fn new_in_memory() -> crate::Result<Sqlite> {
        // TODO(libsql): Connection::open_in_memory
        Self::new(":memory:")
    }

    /// The underlying libsql::Connection. Only available with the `expose-drivers` Cargo
    /// feature. This is a lower level API when you need to get into database specific features.
    #[cfg(feature = "expose-drivers")]
    pub fn connection(&self) -> &Mutex<libsql::Connection> {
        &self.client
    }
}

impl TransactionCapable for Sqlite {}

#[async_trait]
impl Queryable for Sqlite {
    async fn query(&self, q: Query<'_>) -> crate::Result<ResultSet> {
        let (sql, params) = visitor::Sqlite::build(q)?;
        self.query_raw(&sql, &params).await
    }

    async fn query_raw(&self, sql: &str, params: &[Value<'_>]) -> crate::Result<ResultSet> {
        metrics::query("sqlite.query_raw", sql, params, move || async move {
            let client = self.client.lock().await;

            // TODO(libsql): important: prepare_cached
            let stmt = client.prepare(sql)?;

            let rows = stmt.query(&params_from_iter(params.iter())?)?;
            let mut result = ResultSet::new(rows.to_column_names(), Vec::new());

            while let Some(row) = rows.next()? {
                result.rows.push(row.get_result_row()?);
            }

            result.set_last_insert_id(u64::try_from(client.last_insert_rowid()).unwrap_or(0));

            Ok(result)
        })
        .await
    }

    async fn query_raw_typed(&self, sql: &str, params: &[Value<'_>]) -> crate::Result<ResultSet> {
        self.query_raw(sql, params).await
    }

    async fn execute(&self, q: Query<'_>) -> crate::Result<u64> {
        let (sql, params) = visitor::Sqlite::build(q)?;
        self.execute_raw(&sql, &params).await
    }

    async fn execute_raw(&self, sql: &str, params: &[Value<'_>]) -> crate::Result<u64> {
        metrics::query("sqlite.query_raw", sql, params, move || async move {
            let client = self.client.lock().await;
            // TODO(libsql): important: prepare_cached
            let stmt = client.prepare(sql)?;
            let res = stmt.execute(&params_from_iter(params.iter())?)?;

            Ok(res)
        })
        .await
    }

    async fn execute_raw_typed(&self, sql: &str, params: &[Value<'_>]) -> crate::Result<u64> {
        self.execute_raw(sql, params).await
    }

    async fn raw_cmd(&self, cmd: &str) -> crate::Result<()> {
        metrics::query("sqlite.raw_cmd", cmd, &[], move || async move {
            let client = self.client.lock().await;
            client.execute_batch(cmd)?;
            Ok(())
        })
        .await
    }

    async fn version(&self) -> crate::Result<Option<String>> {
        Ok(Some(libsql::version().into()))
    }

    fn is_healthy(&self) -> bool {
        true
    }

    async fn set_tx_isolation_level(&self, isolation_level: IsolationLevel) -> crate::Result<()> {
        // SQLite is always "serializable", other modes involve pragmas
        // and shared cache mode, which is out of scope for now and should be implemented
        // as part of a separate effort.
        if !matches!(isolation_level, IsolationLevel::Serializable) {
            let kind = ErrorKind::invalid_isolation_level(&isolation_level);
            return Err(Error::builder(kind).build());
        }

        Ok(())
    }

    fn requires_isolation_first(&self) -> bool {
        false
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::{
        ast::*,
        connector::Queryable,
        error::{ErrorKind, Name},
    };

    #[test]
    fn sqlite_params_from_str_should_resolve_path_correctly_with_file_scheme() {
        let path = "file:dev.db";
        let params = SqliteParams::try_from(path).unwrap();
        assert_eq!(params.file_path, "dev.db");
    }

    #[test]
    fn sqlite_params_from_str_should_resolve_path_correctly_with_sqlite_scheme() {
        let path = "sqlite:dev.db";
        let params = SqliteParams::try_from(path).unwrap();
        assert_eq!(params.file_path, "dev.db");
    }

    #[test]
    fn sqlite_params_from_str_should_resolve_path_correctly_with_no_scheme() {
        let path = "dev.db";
        let params = SqliteParams::try_from(path).unwrap();
        assert_eq!(params.file_path, "dev.db");
    }

    #[tokio::test]
    async fn unknown_table_should_give_a_good_error() {
        let conn = Sqlite::try_from("file:db/test.db").unwrap();
        let select = Select::from_table("not_there");

        let err = conn.select(select).await.unwrap_err();

        match err.kind() {
            ErrorKind::TableDoesNotExist { table } => {
                assert_eq!(&Name::available("not_there"), table);
            }
            e => panic!("Expected error TableDoesNotExist, got {:?}", e),
        }
    }

    #[tokio::test]
    async fn in_memory_sqlite_works() {
        let conn = Sqlite::new_in_memory().unwrap();

        conn.raw_cmd("CREATE TABLE test (id INTEGER PRIMARY KEY, txt TEXT NOT NULL);")
            .await
            .unwrap();

        let insert = Insert::single_into("test").value("txt", "henlo");
        conn.insert(insert.into()).await.unwrap();

        let select = Select::from_table("test").value(asterisk());
        let result = conn.select(select.clone()).await.unwrap();
        let result = result.into_single().unwrap();

        assert_eq!(result.get("id").unwrap(), &Value::int32(1));
        assert_eq!(result.get("txt").unwrap(), &Value::text("henlo"));

        // Check that we do get a separate, new database.
        let other_conn = Sqlite::new_in_memory().unwrap();

        let err = other_conn.select(select).await.unwrap_err();
        assert!(matches!(err.kind(), ErrorKind::TableDoesNotExist { .. }));
    }

    #[tokio::test]
    async fn quoting_in_returning_in_sqlite_works() {
        let conn = Sqlite::new_in_memory().unwrap();

        conn.raw_cmd("CREATE TABLE test (id  INTEGER PRIMARY KEY, `txt space` TEXT NOT NULL);")
            .await
            .unwrap();

        let insert = Insert::single_into("test").value("txt space", "henlo");
        conn.insert(insert.into()).await.unwrap();

        let select = Select::from_table("test").value(asterisk());
        let result = conn.select(select.clone()).await.unwrap();
        let result = result.into_single().unwrap();

        assert_eq!(result.get("id").unwrap(), &Value::int32(1));
        assert_eq!(result.get("txt space").unwrap(), &Value::text("henlo"));

        let insert = Insert::single_into("test").value("txt space", "henlo");
        let insert: Insert = Insert::from(insert).returning(["txt space"]);

        let result = conn.insert(insert).await.unwrap();
        let result = result.into_single().unwrap();

        assert_eq!(result.get("txt space").unwrap(), &Value::text("henlo"));
    }
}
