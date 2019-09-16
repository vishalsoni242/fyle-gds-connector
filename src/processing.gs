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
