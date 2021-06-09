use crate::{
    pair::Pair,
    sql_migration::{SqlMigration, SqlMigrationStep},
    SqlFlavour, SqlMigrationConnector,
};
use migration_connector::{
    ConnectorError, ConnectorResult, DatabaseMigrationStepApplier, DestructiveChangeDiagnostics, Migration,
};
use sql_schema_describer::{walkers::SqlSchemaExt, SqlSchema};
use user_facing_errors::migration_engine::ApplyMigrationError;

#[async_trait::async_trait]
impl DatabaseMigrationStepApplier for SqlMigrationConnector {
    #[tracing::instrument(skip(self, migration))]
    async fn apply_migration(&self, migration: &Migration) -> ConnectorResult<u32> {
        let migration: &SqlMigration = migration.downcast_ref();
        tracing::debug!("{} steps to execute", migration.steps.len());

        for (index, step) in migration.steps.iter().enumerate() {
            for sql_string in render_raw_sql(&step, self.flavour(), Pair::new(&migration.before, &migration.after)) {
                tracing::debug!(index, %sql_string);
                self.conn().raw_cmd(&sql_string).await?;
            }
        }

        Ok(migration.steps.len() as u32)
    }

    fn render_steps(&self, migration: &Migration) -> Vec<String> {
        let mut steps = Vec::new();
        render_steps(migration.downcast_ref(), self.flavour(), &mut steps);
        steps
    }

    fn render_script(&self, migration: &Migration, diagnostics: &DestructiveChangeDiagnostics) -> String {
        let migration: &SqlMigration = migration.downcast_ref();
        if migration.steps.is_empty() {
            return "-- This is an empty migration.".to_string();
        }

        let mut script = String::with_capacity(40 * migration.steps.len());

        // Note: it would be much nicer if we could place the warnings next to
        // the SQL for the steps that triggered them.
        if diagnostics.has_warnings() || !diagnostics.unexecutable_migrations.is_empty() {
            script.push_str("/*\n  Warnings:\n\n");

            for warning in &diagnostics.warnings {
                script.push_str("  - ");
                script.push_str(&warning.description);
                script.push('\n');
            }

            for unexecutable in &diagnostics.unexecutable_migrations {
                script.push_str("  - ");
                script.push_str(&unexecutable.description);
                script.push('\n');
            }

            script.push_str("\n*/\n")
        }

        // Whether we are on the first *rendered* step, to avoid printing a
        // newline before it. This can't be `enumerate()` on the loop because
        // some steps don't render anything.
        let mut is_first_step = true;

        for step in &migration.steps {
            let statements: Vec<String> =
                render_raw_sql(step, self.flavour(), Pair::new(&migration.before, &migration.after));

            if !statements.is_empty() {
                if is_first_step {
                    is_first_step = false;
                } else {
                    script.push('\n');
                }

                // We print a newline *before* migration steps and not after,
                // because we do not want two newlines at the end of the file:
                // many editors will remove trailing newlines, and automatically
                // edit the migration.
                script.push_str("-- ");
                script.push_str(step.description());
                script.push('\n');

                for statement in statements {
                    script.push_str(&statement);
                    script.push_str(";\n");
                }
            }
        }

        script
    }

    async fn apply_script(&self, migration_name: &str, script: &str) -> ConnectorResult<()> {
        self.flavour.scan_migration_script(script);

        self.conn().raw_cmd(script).await.map_err(|quaint_error| {
            ConnectorError::user_facing(ApplyMigrationError {
                migration_name: migration_name.to_owned(),
                database_error_code: String::from(quaint_error.original_code().unwrap_or("none")),
                database_error: quaint_error
                    .original_message()
                    .map(String::from)
                    .unwrap_or_else(|| ConnectorError::from(quaint_error).to_string()),
            })
        })
    }
}

pub(crate) fn render_steps(
    migration: &SqlMigration,
    flavour: &(dyn SqlFlavour + Send + Sync),
    steps: &mut Vec<String>,
) {
    steps.reserve(migration.steps.len());

    for step in &migration.steps {
        let sql = render_raw_sql(&step, flavour, migration.schemas()).join(";\n");

        if !sql.is_empty() {
            steps.push(sql);
        }
    }
}

fn render_raw_sql(
    step: &SqlMigrationStep,
    renderer: &(dyn SqlFlavour + Send + Sync),
    schemas: Pair<&SqlSchema>,
) -> Vec<String> {
    match step {
        SqlMigrationStep::AlterEnum(alter_enum) => renderer.render_alter_enum(alter_enum, &schemas),
        SqlMigrationStep::RedefineTables(redefine_tables) => renderer.render_redefine_tables(redefine_tables, &schemas),
        SqlMigrationStep::CreateEnum { enum_index } => {
            renderer.render_create_enum(&schemas.next().enum_walker_at(*enum_index))
        }
        SqlMigrationStep::DropEnum { enum_index } => {
            renderer.render_drop_enum(&schemas.previous().enum_walker_at(*enum_index))
        }
        SqlMigrationStep::CreateTable { table_index } => {
            let table = schemas.next().table_walker_at(*table_index);

            vec![renderer.render_create_table(&table)]
        }
        SqlMigrationStep::DropTable { table_index } => {
            renderer.render_drop_table(schemas.previous().table_walker_at(*table_index).name())
        }
        SqlMigrationStep::RedefineIndex { table, index } => {
            renderer.render_drop_and_recreate_index(schemas.tables(table).indexes(index).as_ref())
        }
        SqlMigrationStep::AddForeignKey {
            table_index,
            foreign_key_index,
        } => {
            let foreign_key = schemas
                .next()
                .table_walker_at(*table_index)
                .foreign_key_at(*foreign_key_index);

            vec![renderer.render_add_foreign_key(&foreign_key)]
        }
        SqlMigrationStep::DropForeignKey {
            table_index,
            foreign_key_index,
        } => {
            let foreign_key = schemas
                .previous()
                .table_walker_at(*table_index)
                .foreign_key_at(*foreign_key_index);

            vec![renderer.render_drop_foreign_key(&foreign_key)]
        }
        SqlMigrationStep::AlterTable(alter_table) => renderer.render_alter_table(alter_table, &schemas),
        SqlMigrationStep::CreateIndex(create_index) => vec![renderer.render_create_index(
            &schemas
                .next()
                .table_walker_at(create_index.table_index)
                .index_at(create_index.index_index),
        )],
        SqlMigrationStep::DropIndex {
            table_index,
            index_index,
        } => vec![renderer.render_drop_index(&schemas.previous().table_walker_at(*table_index).index_at(*index_index))],
        SqlMigrationStep::AlterIndex { table, index } => {
            renderer.render_alter_index(schemas.tables(table).indexes(index).as_ref())
        }
        SqlMigrationStep::DropView(drop_view) => {
            let view = schemas.previous().view_walker_at(drop_view.view_index);

            vec![renderer.render_drop_view(&view)]
        }
        SqlMigrationStep::DropUserDefinedType(drop_udt) => {
            let udt = schemas.previous().udt_walker_at(drop_udt.udt_index);

            vec![renderer.render_drop_user_defined_type(&udt)]
        }
    }
}
