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
