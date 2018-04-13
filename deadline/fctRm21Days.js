var old_date = prompt("enter date to remove 21 days");
alert("new deadline : " + rmDaysToDate(old_date))
function rmDaysToDate(old_date) {
  // split date dd / mm / yy
  var split_date = old_date.split("/");
  // Les mois 0 a 11 donc on enleve 1, cast avec *1
  var new_date = new Date(
    split_date[2], // yy
    split_date[1] * 1 - 1, // mm
    split_date[0] * 1 - 21 // days
  );
  
  var new_day   = new_date.getDate();
  var new_month = new_date.getMonth() + 1;
  var new_year  = new_date.getYear();

  new_day += 1; // le jour de remise compte comme & jour
  new_day = (new_day < 10 ? "0" : "") + new_day; // ajoute un zéro devant pour la forme
  new_month = (new_month < 10 ? "0" : "") + new_month; // ajoute un zéro devant pour la forme

  var new_date_text = new_day + "/" + new_month + "/" + new_year;
  return new_date_text;
}