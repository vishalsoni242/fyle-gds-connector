function getOAuthService() {
  return OAuth2.createService("fyle")
    .setAuthorizationBaseUrl(BASE_URL + "/app/main/#/oauth/authorize")
    .setTokenUrl(BASE_URL + "/api/oauth/token")
    .setClientId(CLIENT_ID)
    .setClientSecret(CLIENT_SECRET)
    .setPropertyStore(PropertiesService.getUserProperties())
    .setCallbackFunction("authCallback");
}

function authCallback(request) {
  var authorized = getOAuthService().handleCallback(request);
  if (authorized) {
    return HtmlService.createHtmlOutput("Success! You can close this tab.");
  } else {
    return HtmlService.createHtmlOutput("Denied. You can close this tab");
  }
}

function get3PAuthorizationUrls() {
  return getOAuthService().getAuthorizationUrl();
}

function resetAuth() {
  getOAuthService().reset();
}

function isAuthValid() {
  return getOAuthService().hasAccess();
}
