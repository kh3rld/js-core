/**
 Instructions

Create a function named dayOfTheYear which accepts a Date. Your function should return the number of days since the first day of that year.
 */

function dayOfTheYear(date) {
  if (typeof date === "string") {
    date = new Date(date);
  }

  let days = 0;
  while (!isFirst(date)) {
    date.setDate(date.getDate() - 1);
    days++;
  }
  return days + 1;
}

function isFirst(date) {
  return date.getDate() === 1 && date.getMonth() === 0;
}
