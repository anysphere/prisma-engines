use opentelemetry::trace::{SpanContext, TraceContextExt, TraceFlags};
use quaint::ast::{Delete, Insert, Select, Update};
use tracing::Span;
use tracing_opentelemetry::OpenTelemetrySpanExt;
use crate::Context;
use std::sync::OnceLock;

static ENV: OnceLock<String> = OnceLock::new();
static SERVICE: OnceLock<String> = OnceLock::new();
static VERSION: OnceLock<String> = OnceLock::new();

// We assume that if the relevant env vars aren't set, we must be running locally
fn get_env() -> &'static str {
    ENV.get_or_init(|| std::env::var("DD_ENV").unwrap_or_else(|_| "development".to_string()))
}

fn get_service() -> &'static str {
    SERVICE.get_or_init(|| std::env::var("DD_SERVICE").unwrap_or_else(|_| "development".to_string()))
}

fn get_version() -> &'static str {
    VERSION.get_or_init(|| std::env::var("DD_VERSION").unwrap_or_else(|_| "development".to_string()))
}

fn get_dd_tag_string(ctx: &Context<'_>) -> String {
    // Prisma doesn't support datadog dbm tags in the query comments, so we've added them here.
    // See https://github.com/DataDog/dd-trace-js/blob/master/packages/dd-trace/src/plugins/database.js#L31
    // for the tags that are used by the postgres datadog plugin as an example.
    let dbname = ctx.dbname().unwrap_or("unknown");
    let db_host = ctx.db_host();
    // We don't want to thread the database_service through the prisma client and prisma engine,
    // so we just hard code our known databases here and infer the db service name from the host.
    let database_service = if db_host.contains("main-db") {
        "main-db"
    } else if db_host.contains("analytics-db") {
        "analytics-db"
    } else if db_host.contains("codebase-aurora") {
        "codebase-db"
    } else if db_host.contains("mysql-db") {
        "mysql-db"
    } else {
        "unknown"
    };
    let env = get_env();
    let parent_service = get_service();
    let parent_version = get_version();
    return format!("dddb='{}',dddbs='{}',dde='{}',ddh='{}',ddps='{}',ddpv='{}'",
        dbname, database_service, db_host, env, parent_service, parent_version)
}


pub fn trace_parent_to_string(context: &SpanContext) -> String {
    let trace_id = context.trace_id();
    let span_id = context.span_id();

    // see https://www.w3.org/TR/trace-context/#traceparent-header-field-values
    format!("traceparent='00-{trace_id:032x}-{span_id:032x}-01'")
}

pub trait SqlTraceComment: Sized {
    fn append_trace(self, span: &Span) -> Self;
    fn add_trace_id(self, ctx: &Context<'_>) -> Self;
}

macro_rules! sql_trace {
    ($what:ty) => {
        impl SqlTraceComment for $what {
            fn append_trace(self, span: &Span) -> Self {
                let otel_ctx = span.context();
                let span_ref = otel_ctx.span();
                let otel_ctx = span_ref.span_context();

                if otel_ctx.trace_flags() == TraceFlags::SAMPLED {
                    self.comment(trace_parent_to_string(otel_ctx))
                } else {
                    self
                }
            }
            // Temporary method to pass the traceid in an operation
            fn add_trace_id(self, ctx: &Context<'_>) -> Self {
                // Always add the dd tags so we at least get service info, even if there's not an active trace.
                let dd_tag_string = get_dd_tag_string(ctx);
                if let Some(traceparent) = ctx.trace_id {
                    if should_sample(&traceparent) {
                        self.comment(format!("{},traceparent='{}'", dd_tag_string, traceparent))
                    } else {
                        self.comment(dd_tag_string)
                    }
                } else {
                    self.comment(dd_tag_string)
                }
            }
        }
    };
}

fn should_sample(traceparent: &str) -> bool {
    traceparent.split('-').count() == 4 && traceparent.ends_with("-01")
}

sql_trace!(Insert<'_>);

sql_trace!(Update<'_>);

sql_trace!(Delete<'_>);

sql_trace!(Select<'_>);
