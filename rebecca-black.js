/*
Instructions

Create the following functions which accept a Date:

    isFriday: returns true if the Date is a Friday.
    isWeekend: returns true if the Date is a weekend day.
    isLeapYear: returns true if the year of the Date is a leap year.
    isLastDayOfMonth: returns true if the Date represents the last day of the month.
 */

function isFriday(date) {
  return date instanceof Date && date.getDay() === 5;
}

function isWeekend(date) {
  return date instanceof Date && (date.getDay() === 0 || date.getDay() === 6);
}

function isLeapYear(date) {
  if (!(date instanceof Date)) {
    throw new Error("Invalid date provided.");
  }

  const year = date.getFullYear();
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function isLastDayOfMonth(date) {
  if (!(date instanceof Date)) {
    throw new Error("Invalid date provided.");
  }

  const nextDay = new Date(date);
  nextDay.setDate(date.getDate() + 1);
  return nextDay.getDate() === 1;
}
