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
