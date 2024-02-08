#![doc = include_str!("../README.md")]
#![deny(rust_2018_idioms, unsafe_code)]
#![allow(clippy::derive_partial_eq_without_eq)]

pub mod builtin_connectors;
pub mod datamodel_connector;

/// `mcf`: Turns a collection of `configuration::Datasource` and `configuration::Generator` into a
/// JSON representation. This is the `get_config()` representation.
pub mod mcf;

mod common;
mod configuration;
mod reformat;
mod set_config_dir;
mod validate;

pub use crate::{
    common::{PreviewFeature, PreviewFeatures, ALL_PREVIEW_FEATURES},
    configuration::{
        Configuration, Datasource, DatasourceConnectorData, Generator, GeneratorConfigValue, StringFromEnvVar,
    },
    reformat::reformat,
};
pub use diagnostics;
pub use parser_database::{self, is_reserved_type_name};
pub use schema_ast;
pub use set_config_dir::set_config_dir;

use self::validate::{datasource_loader, generator_loader};
use diagnostics::Diagnostics;
use parser_database::{ast, ParserDatabase, SourceFile};

/// The collection of all available connectors.
pub type ConnectorRegistry<'a> = &'a [&'static dyn datamodel_connector::Connector];

/// The collection of all available validated connectors.
pub type ValidatedConnectorRegistry<'a> = &'a [&'static dyn datamodel_connector::ValidatedConnector];

/// `SerdeValidatedSchema` serves as a temporary serde-compatible representation of
/// `ValidatedSchema` and `ValidatedSchemaForQE`.
/// In fact, it doesn't hold any references to non-serializable values, like `&'static dyn Connector`.
#[derive(serde::Serialize, serde::Deserialize)]
pub struct SerdeValidatedSchema {
    pub db: parser_database::ParserDatabase,
    pub preview_features: enumflags2::BitFlags<PreviewFeature>,
    pub relation_mode: datamodel_connector::RelationMode,
    pub provider: String,
}

impl SerdeValidatedSchema {
    pub fn into_schema_for_qe(self, connectors: &ValidatedConnectorRegistry<'_>) -> ValidatedSchemaForQE {
        let active_connector = connectors
            .iter()
            .find(|c| c.is_provider(self.provider.as_str()))
            .unwrap();

        ValidatedSchemaForQE {
            db: self.db,
            preview_features: self.preview_features,
            relation_mode: self.relation_mode,
            connector: *active_connector,
        }
    }
}

pub trait ValidSchema: Sync + Send + 'static {
    fn preview_features(&self) -> enumflags2::BitFlags<PreviewFeature>;
    fn relation_mode(&self) -> datamodel_connector::RelationMode;
    fn connector(&self) -> &'static dyn datamodel_connector::ValidatedConnector;
}

/// `SchemaForQE` is the `query-engine`-specific specific variant of `ValidatedSchema`.
/// More specifically, it's for the size-optimized `query-engine-wasm`.
/// Using `ValidatedConnector` rather than `Connector` results in 14+ fewer KB
/// in `query-engine-wasm`, after gzip.
pub struct ValidatedSchemaForQE {
    pub db: parser_database::ParserDatabase,
    pub preview_features: enumflags2::BitFlags<PreviewFeature>,
    pub relation_mode: datamodel_connector::RelationMode,
    pub connector: &'static dyn datamodel_connector::ValidatedConnector,
}

impl ValidSchema for ValidatedSchemaForQE {
    fn preview_features(&self) -> enumflags2::BitFlags<PreviewFeature> {
        self.preview_features
    }

    fn relation_mode(&self) -> datamodel_connector::RelationMode {
        self.relation_mode
    }

    fn connector(&self) -> &'static dyn datamodel_connector::ValidatedConnector {
        self.connector
    }
}

impl From<ValidatedSchema> for SerdeValidatedSchema {
    fn from(schema: ValidatedSchema) -> Self {
        Self {
            db: schema.db,
            preview_features: schema.configuration.preview_features(),
            relation_mode: schema.relation_mode,
            provider: schema.connector.provider_name().to_owned(),
        }
    }
}

impl From<ValidatedSchema> for ValidatedSchemaForQE {
    fn from(schema: ValidatedSchema) -> Self {
        Self {
            db: schema.db,
            preview_features: schema.configuration.preview_features(),
            relation_mode: schema.relation_mode,
            connector: schema.connector.as_validated_connector(),
        }
    }
}

impl std::fmt::Debug for ValidatedSchemaForQE {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.write_str("<Prisma schema>")
    }
}

pub struct ValidatedSchema {
    pub configuration: Configuration,
    pub db: parser_database::ParserDatabase,
    pub connector: &'static dyn datamodel_connector::Connector,
    pub diagnostics: Diagnostics,
    relation_mode: datamodel_connector::RelationMode,
}

impl ValidSchema for ValidatedSchema {
    fn preview_features(&self) -> enumflags2::BitFlags<PreviewFeature> {
        self.configuration.preview_features()
    }

    fn relation_mode(&self) -> datamodel_connector::RelationMode {
        self.relation_mode
    }

    fn connector(&self) -> &'static dyn datamodel_connector::ValidatedConnector {
        self.connector.as_validated_connector()
    }
}

impl std::fmt::Debug for ValidatedSchema {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.write_str("<Prisma schema>")
    }
}

impl ValidatedSchema {
    pub fn relation_mode(&self) -> datamodel_connector::RelationMode {
        self.relation_mode
    }
}

/// The most general API for dealing with Prisma schemas. It accumulates what analysis and
/// validation information it can, and returns it along with any error and warning diagnostics.
pub fn validate(file: SourceFile, connectors: ConnectorRegistry<'_>) -> ValidatedSchema {
    let mut diagnostics = Diagnostics::new();
    let db = ParserDatabase::new(file, &mut diagnostics);
    let configuration = validate_configuration(db.ast(), &mut diagnostics, connectors);
    let datasources = &configuration.datasources;
    let out = validate::validate(db, datasources, configuration.preview_features(), diagnostics);

    ValidatedSchema {
        diagnostics: out.diagnostics,
        configuration,
        connector: out.connector,
        db: out.db,
        relation_mode: out.relation_mode,
    }
}

/// Given a textual `.prisma` file, it:
/// - parses it
/// - validates it
pub fn serialize_to_bytes(file: SourceFile, connectors: ConnectorRegistry<'_>) -> Result<Vec<u8>, String> {
    let mut validated_schema = validate(file, connectors);

    if let Err(err) = validated_schema.diagnostics.to_result() {
        return Err(err.to_pretty_string("schema.prisma", validated_schema.db.source()));
    }

    let serde_schema = SerdeValidatedSchema::from(validated_schema);

    postcard::to_allocvec(&serde_schema).map_err(|e| format!("[serialize]: {}", e))
}

pub fn deserialize_from_bytes(
    schema_as_binary: &[u8],
    connectors: &ValidatedConnectorRegistry<'_>,
) -> Result<ValidatedSchemaForQE, String> {
    let serde_schema: SerdeValidatedSchema =
        postcard::from_bytes(schema_as_binary).map_err(|e| format!("[deserialize] {}", e))?;

    Ok(serde_schema.into_schema_for_qe(connectors))
}

/// Retrieves a Prisma schema without validating it.
/// You should only use this method when actually validating the schema is too expensive
/// computationally or in terms of bundle size (e.g., for `query-engine-wasm`).
/// Note: this should be deprecated by this PR.
pub fn parse_without_validation(file: SourceFile, connectors: ConnectorRegistry<'_>) -> ValidatedSchema {
    let mut diagnostics = Diagnostics::new();
    let db = ParserDatabase::new(file, &mut diagnostics);
    let configuration = validate_configuration(db.ast(), &mut diagnostics, connectors);
    let datasources = &configuration.datasources;
    let out = validate::parse_without_validation(db, datasources);

    ValidatedSchema {
        diagnostics,
        configuration,
        connector: out.connector,
        db: out.db,
        relation_mode: out.relation_mode,
    }
}

/// Loads all configuration blocks from a datamodel using the built-in source definitions.
pub fn parse_configuration(
    schema: &str,
    connectors: ConnectorRegistry<'_>,
) -> Result<Configuration, diagnostics::Diagnostics> {
    let mut diagnostics = Diagnostics::default();
    let ast = schema_ast::parse_schema(schema, &mut diagnostics);
    let out = validate_configuration(&ast, &mut diagnostics, connectors);
    diagnostics.to_result().map(|_| out)
}

fn validate_configuration(
    schema_ast: &ast::SchemaAst,
    diagnostics: &mut Diagnostics,
    connectors: ConnectorRegistry<'_>,
) -> Configuration {
    let generators = generator_loader::load_generators_from_ast(schema_ast, diagnostics);

    let datasources = datasource_loader::load_datasources_from_ast(schema_ast, diagnostics, connectors);

    Configuration {
        generators,
        datasources,
        warnings: diagnostics.warnings().to_owned(),
    }
}
