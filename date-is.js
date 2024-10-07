function isValid(date) {
  return (
    (date instanceof Date && !isNaN(date)) ||
    (typeof date === "number" && !isNaN(new Date(date)))
  );
}

function isAfter(date1, date2) {
  if (!isValid(date1) || !isValid(date2)) {
    throw new Error("Invalid date provided.");
  }
  return date1 > date2;
}

function isBefore(date1, date2) {
  if (!isValid(date1) || !isValid(date2)) {
    throw new Error("Invalid date provided.");
  }
  return date1 < date2;
}

function isFuture(date) {
  if (!isValid(date)) {
    throw new Error("Invalid date provided.");
  }
  return date > new Date();
}

function isPast(date) {
  if (!isValid(date)) {
    throw new Error("Invalid date provided.");
  }
  return date < new Date();
}
