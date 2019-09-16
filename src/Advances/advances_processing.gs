function advancesProcessing(requestedFields, response) {
  return response.map(function(data) {
    var row = [];
    requestedFields.asArray().forEach(function(field) {
      switch (field.getId()) {
        case "advance_id":
          return row.push(data.id);

        case "employee_email":
          return row.push(data.employee_email);

        case "currency":
          return row.push(data.currency);

        case "amount":
          return row.push(data.amount);

        case "original_currency":
          return row.push(data.original_currency);

        case "original_amount":
          return row.push(data.original_amount);

        case "org_id":
          return row.push(data.org_id);

        case "org_name":
          return row.push(data.org_name);

        case "settlement_id":
          return row.push(data.settlement_id);

        case "settled_at":
          return row.push(dateProcessing(data.settled_at));

        case "created_by":
          return row.push(data.created_by);

        case "project_id":
          return row.push(data.project_id);

        case "project_name":
          return row.push(data.project_name);

        case "purpose":
          return row.push(data.purpose);

        case "issued_at":
          return row.push(dateProcessing(data.issued_at));

        case "payment_mode":
          return row.push(data.payment_mode);

        case "reference":
          return row.push(data.reference);

        case "exported":
          return row.push(data.exported);

        default:
          return row.push("");
      }
    });
    return { values: row };
  });
}