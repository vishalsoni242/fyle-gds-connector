function getAdvancesSchema(request) {
  var cc = DataStudioApp.createCommunityConnector();
  var fields = cc.getFields();
  var types = cc.FieldType;
  var aggregations = cc.AggregationType;

  fields
    .newDimension()
    .setId("advance_id")
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId("employee_email")
    .setType(types.TEXT);

  fields
    .newMetric()
    .setId("amount")
    .setType(types.NUMBER);

  fields
    .newDimension()
    .setId("currency")
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId("org_id")
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId("org_name")
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId("settlement_id")
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId("settled_at")
    .setType(types.YEAR_MONTH_DAY);

  fields
    .newDimension()
    .setId("created_by")
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId("project_id")
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId("project_name")
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId("purpose")
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId("issued_at")
    .setType(types.YEAR_MONTH_DAY);

  fields
    .newDimension()
    .setId("payment_mode")
    .setType(types.TEXT);

  fields
    .newMetric()
    .setId("original_amount")
    .setType(types.NUMBER);

  fields
    .newDimension()
    .setId("original_currency")
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId("reference")
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId("exported")
    .setType(types.BOOLEAN);

  return fields;
}