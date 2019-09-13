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

function getTripRequestsSchema(request) {
  var cc = DataStudioApp.createCommunityConnector();
  var fields = cc.getFields();
  var types = cc.FieldType;
  var aggregations = cc.AggregationType;

  fields
    .newDimension()
    .setId("trip_request_id")
    .setType(types.TEXT);

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
    .setId("created_by")
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId("traveller_name")
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId("traveller_phone_number")
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId("requested_by_employee_email")
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId("requested_by_name")
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId("requested_by_joining_date")
    .setType(types.YEAR_MONTH_DAY);

  fields
    .newDimension()
    .setId("requested_by_location")
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId("requested_by_level")
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId("requested_by_business_unit")
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId("requested_by_department")
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId("requested_by_sub_department")
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId("approver1_email")
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId("approver2_email")
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId("approver3_email")
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId("requested_by_title")
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId("requested_by_branch_ifsc")
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId("requested_by_branch_account")
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId("requested_by_mobile")
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId("requested_by_delegatee_email")
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId("requested_by_default_cost_center_name")
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
    .setId("purpose")
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId("trip_notes")
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId("trip_type")
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId("from_city")
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId("to_city")
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId("from_city_display_name")
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId("to_city_display_name")
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId("onward_date")
    .setType(types.YEAR_MONTH_DAY);

  fields
    .newDimension()
    .setId("return_date")
    .setType(types.YEAR_MONTH_DAY);

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
    .setId("trip_state")
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId("request_number")
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId("is_sent_back")
    .setType(types.BOOLEAN);

  fields
    .newDimension()
    .setId("is_pulled_back")
    .setType(types.BOOLEAN);

  fields
    .newDimension()
    .setId("is_booked")
    .setType(types.BOOLEAN);

  fields
    .newDimension()
    .setId("is_requested_cancellation")
    .setType(types.BOOLEAN);

  fields
    .newDimension()
    .setId("start_date")
    .setType(types.YEAR_MONTH_DAY);

  fields
    .newDimension()
    .setId("end_date")
    .setType(types.YEAR_MONTH_DAY);

  return fields;
}
