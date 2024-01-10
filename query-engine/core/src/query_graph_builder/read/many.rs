use super::{utils::get_relation_load_strategy, *};
use crate::{query_document::ParsedField, ManyRecordsQuery, QueryOption, QueryOptions, ReadQuery};
use query_structure::Model;
use schema::QuerySchema;

pub(crate) fn find_many(
    field: ParsedField<'_>,
    model: Model,
    query_schema: &QuerySchema,
) -> QueryGraphBuilderResult<ReadQuery> {
    find_many_with_options(field, model, QueryOptions::none(), query_schema)
}

pub(crate) fn find_many_or_throw(
    field: ParsedField<'_>,
    model: Model,
    query_schema: &QuerySchema,
) -> QueryGraphBuilderResult<ReadQuery> {
    find_many_with_options(field, model, QueryOption::ThrowOnEmpty.into(), query_schema)
}

#[inline]
fn find_many_with_options(
    field: ParsedField<'_>,
    model: Model,
    options: QueryOptions,
    query_schema: &QuerySchema,
) -> QueryGraphBuilderResult<ReadQuery> {
    let args = extractors::extract_query_args(field.arguments, &model, None)?;
    let name = field.name;
    let alias = field.alias;
    let nested_fields = field.nested_fields.unwrap().fields;
    let (aggr_fields_pairs, nested_fields) = extractors::extract_nested_rel_aggr_selections(nested_fields);
    let aggregation_selections = utils::collect_relation_aggr_selections(aggr_fields_pairs, &model)?;
    let selection_order: Vec<String> = utils::collect_selection_order(&nested_fields);
    let selected_fields = utils::collect_selected_fields(&nested_fields, args.distinct.clone(), &model, query_schema)?;
    let nested = utils::collect_nested_queries(nested_fields, &model, query_schema)?;
    let model = model;

    let selected_fields = utils::merge_relation_selections(selected_fields, None, &nested);
    let selected_fields = utils::merge_cursor_fields(selected_fields, &args.cursor);

    let relation_load_strategy = get_relation_load_strategy(
        args.cursor.as_ref(),
        args.distinct.as_ref(),
        &nested,
        &aggregation_selections,
        query_schema,
    );

    Ok(ReadQuery::ManyRecordsQuery(ManyRecordsQuery {
        name,
        alias,
        model,
        args,
        selected_fields,
        nested,
        selection_order,
        aggregation_selections,
        options,
        relation_load_strategy,
    }))
}
