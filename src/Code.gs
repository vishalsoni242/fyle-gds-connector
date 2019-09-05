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
    );

  return config.build();
}

function getSchema(request) {
  var fields;
  console.log(request.configParams.obj_type);
  if (request.configParams.obj_type == "Expenses") {
    fields = getExpenseSchema(request).build();
  } else if (request.configParams.obj_type == "Advances") {
    fields = getAdvancesSchema(request).build();
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
    requestedFields = getExpenseSchema().forIds(requestedFieldIds);

    var response = UrlFetchApp.fetch(BASE_URL + "/api/tpa/v1/expenses", {
      headers: headers
    });
    var parsedResponse = JSON.parse(response).data;
    rows = expenseProcessing(requestedFields, parsedResponse);
  } else if (request.configParams.obj_type == "Advances") {
    requestedFields = getAdvancesSchema().forIds(requestedFieldIds);

    var response = UrlFetchApp.fetch(BASE_URL + "/api/tpa/v1/advances", {
      headers: headers
    });
    var parsedResponse = JSON.parse(response).data;
    rows = expenseProcessing(requestedFields, parsedResponse);
  }

  return {
    schema: requestedFields.build(),
    rows: rows
  };
}
