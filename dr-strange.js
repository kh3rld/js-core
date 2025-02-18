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

function timeTravel({ date, hour, minute, second }) {
  const newDate = new Date(date);
  newDate.setHours(hour);
  newDate.setMinutes(minute);
  newDate.setSeconds(second);
  return newDate;
}

console.log(addWeek(new Date("0001-01-01")));
console.log(addWeek(new Date("0001-01-02")));
console.log(addWeek(new Date("0001-01-07")));
console.log(addWeek(new Date("0001-01-08")));
console.log(addWeek(new Date("0001-01-09")));

const modifiedDate = timeTravel({
  date: new Date("2020-05-29 23:25:22"),
  hour: 21,
  minute: 22,
  second: 22,
});

console.log(modifiedDate.toString());
