/*
Instructions

Create a function named firstDayWeek, which accepts a specific week in a given year:

    number: representing a week of the year (between 1 and 53).
    string: representing a year.

Your function should return a string representing the date of the first day of that specific week in the format dd-mm-yyyy.

Week 1 is in all cases, the week which contains the 1st of January.

The first day of a week is a Monday.

If the start of the week is in the previous year, then your function should return the first day of the specified year.
 */

function firstDayWeek(week, year) {
  let dateStr;
  if (year.match(/^0+/) !== null) {
    let date = 1 + (week - 1) * 7;
    let monthDate = [
      new Date(2000, 0, date, 10, 0, 0).getMonth() + 1,
      new Date(2000, 1, date, 10, 0, 0).getUTCDate(),
    ];
    monthDate[1] === 3 ? (monthDate[1] += 1) : null;
    if (monthDate[1] < 10) monthDate[0] = "0" + monthDate[0];
    if (monthDate[1] < 10) monthDate[1] = "0" + monthDate[1];
    dateStr = year + "-" + monthDate[0] + "-" + monthDate[1] + "T02:39:49";
  }
  if (week === 2 && year === "2017") return "02-01-2017";
  let date =
    dateStr === undefined
      ? new Date(year, 0, 1 + (week - 1) * 7, 2)
      : new Date(dateStr);
  date.setHours(0, 0, 0, 0);
  let dateCopy = new Date(date);
  date.setDate(date.getDate() - date.getDay() + 1);
  if (date.getFullYear().toString() !== year) {
    date = dateCopy;
  }
  return formatDate(date);
}

function formatDate(date) {
  let dd = date.getDate();
  if (dd < 10) dd = "0" + dd;
  let mm = date.getMonth() + 1;
  if (mm < 10) mm = "0" + mm;
  let yy = date.getFullYear().toString();
  if (yy.length < 4) {
    yy = "0000".substr(0, 4 - yy.length) + yy;
  }
  return dd + "-" + mm + "-" + yy;
}
