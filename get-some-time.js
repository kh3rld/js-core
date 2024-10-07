function firstDayWeek(week, year) {
  if (week < 1 || week > 53) {
    throw new Error("Week must be between 1 and 53.");
  }

  const startOfYear = new Date(year, 0, 1);
  const firstDayOfWeek1 = new Date(startOfYear);
  const dayOfWeek = firstDayOfWeek1.getDay();
  const offset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;

  firstDayOfWeek1.setDate(firstDayOfWeek1.getDate() + offset);
  const firstDayOfSpecifiedWeek = new Date(firstDayOfWeek1);
  firstDayOfSpecifiedWeek.setDate(firstDayOfWeek1.getDate() + (week - 1) * 7);

  const day = String(firstDayOfSpecifiedWeek.getDate()).padStart(2, "0");
  const month = String(firstDayOfSpecifiedWeek.getMonth() + 1).padStart(2, "0");
  const formattedDate = `${day}-${month}-${firstDayOfSpecifiedWeek.getFullYear()}`;

  return formattedDate;
}
