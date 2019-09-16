function tripRequestsProcessing(requestedFields, response) {
  return response.map(function(data) {
    var row = [];
    requestedFields.asArray().forEach(function(field) {
      switch (field.getId()) {
        case "trip_request_id":
          return row.push(data.id);

        case "created_at":
          return row.push(dateProcessing(data.created_at));

        case "updated_at":
          return row.push(dateProcessing(data.updated_at));

        case "created_by":
          return row.push(data.created_by);

        case "traveller_name":
          return row.push(data.traveller_details[0].name);

        case "traveller_phone_number":
          return row.push(data.traveller_details[0].phone_number);

        case "requested_by_employee_email":
          return row.push(data.requested_by.employee_email);

        case "requested_by_name":
          return row.push(data.requested_by.full_name);

        case "requested_by_joining_date":
          return row.push(dateProcessing(data.requested_by.joining_date));

        case "requested_by_location":
          return row.push(data.requested_by.location);

        case "requested_by_level":
          return row.push(data.requested_by.level);

        case "requested_by_business_unit":
          return row.push(data.requested_by.business_unit);

        case "requested_by_department":
          return row.push(data.requested_by.department);

        case "requested_by_sub_department":
          return row.push(data.requested_by.sub_department);

        case "approver1_email":
          return row.push(data.requested_by.approver1_email);

        case "approver2_email":
          return row.push(data.requested_by.approver2_email);

        case "approver3_email":
          return row.push(data.requested_by.approver3_email);

        case "requested_by_title":
          return row.push(data.requested_by.title);

        case "requested_by_branch_ifsc":
          return row.push(data.requested_by.branch_ifsc);

        case "requested_by_branch_account":
          return row.push(data.requested_by.branch_account);

        case "requested_by_mobile":
          return row.push(data.requested_by_mobile);

        case "requested_by_delegatee_email":
          return row.push(data.requested_by.delegatee_email);

        case "requested_by_default_cost_center_name":
          return row.push(data.requested_by.default_cost_center_name);

        case "org_id":
          return row.push(data.requested_by.org_id);

        case "org_name":
          return row.push(data.requested_by.org_name);

        case "purpose":
          return row.push(data.purpose);

        case "trip_notes":
          return row.push(data.trip_notes);

        case "trip_type":
          return row.push(data.trip_type);

        case "from_city":
          return row.push(data.trip_cities[0].from_city.city);

        case "from_city_display_name":
          return row.push(data.trip_cities[0].from_city.display_name);

        case "to_city":
          return row.push(data.trip_cities[0].to_city.city);

        case "to_city_display_name":
          return row.push(data.trip_cities[0].to_city.display_name);

        case "project_id":
          return row.push(data.project_id);

        case "project_name":
          return row.push(data.project_name);

        case "onward_date":
          return row.push(dateProcessing(data.trip_cities[0].onward_date));

        case "return_date":
          return row.push(dateProcessing(data.trip_cities[0].return_date));

        case "trip_state":
          return row.push(data.trip_state);

        case "request_number":
          return row.push(data.request_number);

        case "is_sent_back":
          return row.push(data.is_sent_back);

        case "is_pulled_back":
          return row.push(data.is_pulled_back);

        case "is_booked":
          return row.push(data.is_booked);

        case "is_requested_cancellation":
          return row.push(data.is_requested_cancellation);

        case "start_date":
          return row.push(dateProcessing(data.start_date));

        case "end_date":
          return row.push(dateProcessing(data.end_date));

        default:
          return row.push("");
      }
    });
    return { values: row };
  });
}