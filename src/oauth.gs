function getOAuthService() {
  var scriptProps = PropertiesService.getScriptProperties();
  var CLIENT_ID = scriptProps.getProperty("OAUTH_CLIENT_ID");
  var CLIENT_SECRET = scriptProps.getProperty("OAUTH_CLIENT_SECRET");

  return OAuth2.createService("fyle")
    .setAuthorizationBaseUrl(AUTH_URL)
    .setTokenUrl(TOKEN_URL)
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
