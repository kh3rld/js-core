function firstDayWeek(week, year) {
  if (week < 1 || week > 53 || isNaN(year)) {
    throw new Error("Invalid week number or year.");
  }

  const firstDayOfYear = new Date(year, 0, 1);

  const firstMonday = new Date(firstDayOfYear);
  const dayOfWeek = firstMonday.getDay();
  const daysUntilMonday = dayOfWeek === 0 ? 1 : 8 - dayOfWeek;

  firstMonday.setDate(firstMonday.getDate() + daysUntilMonday);

  const firstDayOfSpecifiedWeek = new Date(firstMonday);
  firstDayOfSpecifiedWeek.setDate(firstMonday.getDate() + (week - 1) * 7);
  const day = String(firstDayOfSpecifiedWeek.getDate()).padStart(2, "0");
  const month = String(firstDayOfSpecifiedWeek.getMonth() + 1).padStart(2, "0");
  const formattedDate = `${day}-${month}-${year}`;

  return formattedDate;
}
