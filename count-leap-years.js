/*
Instructions

Create a function named countLeapYears which accepts a Date. Your function should return the number of leap years to have taken place since the year 1.
 */
function countLeapYears(date) {
  const year = date.getFullYear();
  const leapYears =
    Math.floor(year / 4) - Math.floor(year / 100) + Math.floor(year / 400);
  return leapYears;
}
