function matchCron(cronString, date) {
  const [minutePattern, hourPattern] = cronString.split(" ");
  const minute = date.getMinutes();
  const hour = date.getHours();

  const matchesPattern = (pattern, value) => {
    if (pattern === "*") {
      return true;
    }
    const numPattern = parseInt(pattern, 10);
    return value === numPattern; 
  };

  const minuteMatches = matchesPattern(minutePattern, minute);
  const hourMatches = matchesPattern(hourPattern, hour);

  return minuteMatches && hourMatches;
}
