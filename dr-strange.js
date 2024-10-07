function addWeek(date) {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "secondMonday",
    "secondTuesday",
    "secondWednesday",
    "secondThursday",
    "secondFriday",
    "secondSaturday",
    "secondSunday",
  ];

  const epoch = new Date("0001-01-01");
  const diffInTime = date.getTime() - epoch.getTime();
  const diffInDays = Math.floor(diffInTime / (1000 * 3600 * 24));

  return days[diffInDays % 14];
}
