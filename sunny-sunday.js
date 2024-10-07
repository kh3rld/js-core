/*
Instructions

Let's eliminate Sundays by taking them out of the calendar, making a week only six days long, from "Monday" to "Saturday".

Create a function called sunnySunday that takes a Date as an argument and returns the weekday as a string.

    01/01/0001 is a Monday.
 */

function sunnySunday(date) {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  if (typeof date === "string") {
    date = new Date(date);
  }
  const baseDate = new Date("0001-01-01");
  const diffDays = Math.floor((date - baseDate) / (1000 * 60 * 60 * 24));
  const indexDay = ((diffDays % 6) + 6) % 6;
  const dayOfWeek = daysOfWeek[indexDay];

  return `${dayOfWeek}`;
}
