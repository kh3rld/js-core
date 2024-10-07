/*
Instructions

Create a function named matchCron, which accepts a valid cron string, and a valid Date. Your function should return true if the pattern matches the Date.

    You only need to implement numbers and *. Other complex patterns are not required.

Only valid patterns will be tested.
Example

matchCron('9 * * * *', new Date('2020-05-30 18:09:00')) // -> true
matchCron('9 * * * *', new Date('2020-05-30 19:09:00')) // -> true
matchCron('9 * * * *', new Date('2020-05-30 19:21:00')) // -> false
//         | | | | |
//         | | | | +- Day of the Week   (range: 1-7, 1 is Monday)
//         | | | +--- Month of the Year (range: 1-12)
//         | | +----- Day of the Month  (range: 1-31)
//         | +------- Hour              (range: 0-23)
//         +--------- Minute            (range: 0-59)
 */
function matchCron(cronString, date) {
  let cronParts = Array.isArray(cronString)
    ? cronString
    : cronString.split(" ");
  for (let i = 0; i < cronParts.length; i++) {
    if (i === 0) {
      let mins = date.getMinutes();
      if (cronParts[i] !== "*" && mins !== parseInt(cronParts[i])) {
        return false;
      }
    } else if (i === 1) {
      let hours = date.getHours();
      if (cronParts[i] !== "*" && hours !== parseInt(cronParts[i])) {
        return false;
      }
    } else if (i === 2) {
      let dayOfMonth = date.getDate();
      if (cronParts[i] !== "*" && dayOfMonth !== parseInt(cronParts[i])) {
        return false;
      }
    } else if (i === 3) {
      let month = date.getMonth() + 1;
      if (cronParts[i] !== "*" && month !== parseInt(cronParts[i])) {
        return false;
      }
    } else if (i === 4) {
      let dayOfWeek = date.getDay();
      if (cronParts[i] !== "*" && dayOfWeek !== parseInt(cronParts[i])) {
        return false;
      }
    }
  }
  return true;
}
