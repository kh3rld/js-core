function firstDayWeek(week, year) {
  if (week < 1 || week > 53) {
    throw new Error("Week must be between 1 and 53.");
  }

  const startOfYear = new Date(year, 0, 1);
  const dayOfWeek = startOfYear.getDay();
  let firstMonday;
  if (dayOfWeek === 0) {
    firstMonday = new Date(startOfYear);
    firstMonday.setDate(startOfYear.getDate() + 1);
  } else {
    firstMonday = new Date(startOfYear);
    firstMonday.setDate(startOfYear.getDate() + ((1 - dayOfWeek + 7) % 7));
  }
  const firstDayOfSpecifiedWeek = new Date(firstMonday);
  firstDayOfSpecifiedWeek.setDate(firstMonday.getDate() + (week - 1) * 7);

  const day = String(firstDayOfSpecifiedWeek.getDate()).padStart(2, "0");
  const month = String(firstDayOfSpecifiedWeek.getMonth() + 1).padStart(2, "0");
  const formattedDate = `${day}-${month}-${firstDayOfSpecifiedWeek.getFullYear()}`;

  return formattedDate;
}
