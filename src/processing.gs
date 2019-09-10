function dateProcessing(date) {
  if (date == null) {
    return "";
  }
  var d = new Date(date);
  var yearMonthDay = d
    .toISOString()
    .slice(0, 10)
    .replace(/-/g, "");
  return yearMonthDay;
}

function expenseProcessing(requestedFields, response) {
  return response.map(function(data) {
    var row = [];
    requestedFields.asArray().forEach(function(field) {
      switch (field.getId()) {
        case "expense_id":
          return row.push(data.id);

        case "employee_email":
          return row.push(data.employee_email);

        case "spent_at":
          return row.push(dateProcessing(data.spent_at));

        case "currency":
          return row.push(data.currency);

        case "amount":
          return row.push(data.amount);

        case "foreign_currency":
          return row.push(data.foreign_currency);

        case "foreign_amount":
          return row.push(data.foreign_amount);

        case "settlement_id":
          return row.push(data.settlement_id);

        case "settled_at":
          return row.push(dateProcessing(data.settled_at));

        case "purpose":
          return row.push(data.purpose);

        case "project_id":
          return row.push(data.project_id);

        case "project_name":
          return row.push(data.project_name);

        case "cost_center_id":
          return row.push(data.cost_center_id);

        case "cost_center_name":
          return row.push(data.cost_center_name);

        case "category_id":
          return row.push(data.category_id.toString());

        case "category_name":
          return row.push(data.category_name);

        case "state":
          return row.push(data.state);

        case "fund_source":
          return row.push(data.fund_source);

        case "reimbursable":
          return row.push(data.reimbursable);

        case "billable":
          return row.push(data.billable);

        case "verified":
          return row.push(data.verified);

        case "has_attachments":
          return row.push(data.has_attachments);

        case "created_at":
          return row.push(dateProcessing(data.created_at));

        case "updated_at":
          return row.push(dateProcessing(data.updated_at));

        case "approved_at":
          return row.push(dateProcessing(data.approved_at));

        case "verified_at":
          return row.push(dateProcessing(data.verified_at));

        case "reimbursed_at":
          return row.push(dateProcessing(data.reimbursed_at));

        case "train_travel_class":
          return row.push(data.train_travel_class);

        case "flight_journey_travel_class":
          return row.push(data.flight_journey_travel_class);

        case "flight_return_travel_class":
          return row.push(data.flight_return_travel_class);

        case "bus_travel_class":
          return row.push(data.bus_travel_class);

        case "org_id":
          return row.push(data.org_id);

        case "org_name":
          return row.push(data.org_name);

        case "from_dt":
          return row.push(dateProcessing(data.from_dt));

        case "to_dt":
          return row.push(dateProcessing(data.to_dt));

        default:
          return row.push("");
      }
    });
    return { values: row };
  });
}
