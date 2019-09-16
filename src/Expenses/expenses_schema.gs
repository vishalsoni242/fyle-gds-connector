function getExpensesSchema(request) {
  var cc = DataStudioApp.createCommunityConnector();
  var fields = cc.getFields();
  var types = cc.FieldType;
  var aggregations = cc.AggregationType;

  fields
    .newDimension()
    .setId("expense_id")
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId("employee_email")
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId("spent_at")
    .setType(types.YEAR_MONTH_DAY);

  fields
    .newDimension()
    .setId("currency")
    .setType(types.TEXT);

  fields
    .newMetric()
    .setId("amount")
    .setType(types.NUMBER);

  fields
    .newDimension()
    .setId("foreign_currency")
    .setType(types.TEXT);

  fields
    .newMetric()
    .setId("foreign_amount")
    .setType(types.NUMBER);

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
    .setId("purpose")
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
    .setId("cost_center_id")
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId("cost_center_name")
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId("category_id")
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId("category_name")
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId("state")
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId("fund_source")
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId("billable")
    .setType(types.BOOLEAN);

  fields
    .newDimension()
    .setId("reimbursable")
    .setType(types.BOOLEAN);

  fields
    .newDimension()
    .setId("verified")
    .setType(types.BOOLEAN);

  fields
    .newDimension()
    .setId("has_attachments")
    .setType(types.BOOLEAN);

  fields
    .newDimension()
    .setId("created_at")
    .setType(types.YEAR_MONTH_DAY);

  fields
    .newDimension()
    .setId("updated_at")
    .setType(types.YEAR_MONTH_DAY);

  fields
    .newDimension()
    .setId("approved_at")
    .setType(types.YEAR_MONTH_DAY);

  fields
    .newDimension()
    .setId("verified_at")
    .setType(types.YEAR_MONTH_DAY);

  fields
    .newDimension()
    .setId("reimbursed_at")
    .setType(types.YEAR_MONTH_DAY);

  fields
    .newDimension()
    .setId("train_travel_class")
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId("flight_journey_travel_class")
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId("flight_return_travel_class")
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId("bus_travel_class")
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
    .setId("from_dt")
    .setType(types.YEAR_MONTH_DAY);

  fields
    .newDimension()
    .setId("to_dt")
    .setType(types.YEAR_MONTH_DAY);

  return fields;
}