function firstDayWeek(week, year) {
  if (week < 1 || week > 53 || isNaN(year)) {
    throw new Error("Invalid week number or year.");
  }

  const firstDayOfYear = new Date(year, 0, 1);

  const firstMonday = new Date(firstDayOfYear);
  const dayOfWeek = firstMonday.getUTCDay();

  const daysUntilMonday = dayOfWeek === 0 ? 1 : 8 - dayOfWeek;
  firstMonday.setUTCDate(firstMonday.getUTCDate() + daysUntilMonday);

  const firstDayOfSpecifiedWeek = new Date(firstMonday);
  firstDayOfSpecifiedWeek.setUTCDate(firstMonday.getUTCDate() + (week - 1) * 7);

  const day = String(firstDayOfSpecifiedWeek.getUTCDate()).padStart(2, "0");
  const month = String(firstDayOfSpecifiedWeek.getUTCMonth() + 1).padStart(
    2,
    "0"
  );
  const formattedDate = `${day}-${month}-${year}`;

  return formattedDate;
}

console.log(firstDayWeek(1, "1000"));
console.log(firstDayWeek(2, "2024"));
