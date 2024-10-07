/*
Instructions

Create a function named countLeapYears which accepts a Date. Your function should return the number of leap years to have taken place since the year 1.
 */
function countLeapYears(date) {
  const year = date.getFullYear();
  let leapYears = 0;
  for (let i = 1; i <= year; i++) {
    if ((i % 4 === 0 && i % 100 !== 0) || i % 400 === 0) {
      leapYears++;
    }
  }
  return leapYears;
}
