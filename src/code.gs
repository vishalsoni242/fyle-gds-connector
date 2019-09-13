function getAuthType() {
  return { type: "OAUTH2" };
}

function getConfig(request) {
  var cc = DataStudioApp.createCommunityConnector();
  var config = cc.getConfig();

  config
    .newSelectSingle()
    .setId("obj_type")
    .setName("Select Name of Object")
    .setHelpText("Helper text for select single")
    .addOption(
      config
        .newOptionBuilder()
        .setLabel("Expenses")
        .setValue("Expenses")
    )
    .addOption(
      config
        .newOptionBuilder()
        .setLabel("Advances")
        .setValue("Advances")
    )
    .addOption(
      config
        .newOptionBuilder()
        .setLabel("Trip Requests")
        .setValue("Trip Requests")
    );

  return config.build();
}

function getSchema(request) {
  var fields;
  if (request.configParams.obj_type == "Expenses") {
    fields = getExpensesSchema(request).build();
  } else if (request.configParams.obj_type == "Advances") {
    fields = getAdvancesSchema(request).build();
  } else if (request.configParams.obj_type == "Trip Requests") {
    fields = getTripRequestsSchema(request).build();
  }
  return { schema: fields };
}

function getData(request) {
  var headers = {
    Authorization: "Bearer " + getOAuthService().getAccessToken()
  };

  var requestedFieldIds = request.fields.map(function(field) {
    return field.name;
  });

  var requestedFields, rows;

  if (request.configParams.obj_type == "Expenses") {
    requestedFields = getExpensesSchema().forIds(requestedFieldIds);

    var response = UrlFetchApp.fetch(GET_EXPENSES_URL, {
      headers: headers
    });
    var parsedResponse = JSON.parse(response).data;
    rows = expensesProcessing(requestedFields, parsedResponse);
  } else if (request.configParams.obj_type == "Advances") {
    requestedFields = getAdvancesSchema().forIds(requestedFieldIds);

    var response = UrlFetchApp.fetch(GET_ADVANCES_URL, {
      headers: headers
    });
    var parsedResponse = JSON.parse(response).data;
    rows = advancesProcessing(requestedFields, parsedResponse);
  } else if (request.configParams.obj_type == "Trip Requests") {
    requestedFields = getTripRequestsSchema().forIds(requestedFieldIds);
    
    var response = UrlFetchApp.fetch(GET_TRIP_REQUESTS_URL, {
      headers: headers
    });
    var parsedResponse = JSON.parse(response).data;
    rows = tripRequestsProcessing(requestedFields, parsedResponse);
  }

  return {
    schema: requestedFields.build(),
    rows: rows
  };
}
