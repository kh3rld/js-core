function format(date, format) {
  if (typeof date === "string") {
    date = new Date(date);
  }

  const formatMap = {
    y: () => Math.abs(date.getFullYear()),
    yyyy: () => String(Math.abs(date.getFullYear())).padStart(4, 0),
    G: () => (date.getUTCFullYear() < 0 ? "BC" : "AD"),
    GGGG: () => (date.getUTCFullYear() < 0 ? "Before Christ" : "Anno Domini"),
    M: () => date.getMonth() + 1,
    MM: () => String(date.getMonth() + 1).padStart(2, "0"),
    MMM: () => date.toLocaleString("default", { month: "short" }),
    MMMM: () => date.toLocaleString("default", { month: "long" }),
    d: () => date.getDate(),
    dd: () => String(date.getDate()).padStart(2, "0"),
    E: () => date.toLocaleString("default", { weekday: "short" }),
    EEEE: () => date.toLocaleString("default", { weekday: "long" }),
    h: () => date.getHours() % 12 || 12,
    hh: () => String(date.getHours() % 12 || 12).padStart(2, "0"),
    H: () => date.getHours(),
    HH: () => String(date.getHours()).padStart(2, "0"),
    m: () => date.getMinutes(),
    mm: () => String(date.getMinutes()).padStart(2, "0"),
    s: () => date.getSeconds(),
    ss: () => String(date.getSeconds()).padStart(2, "0"),
    a: () => (date.getHours() < 12 ? "AM" : "PM"),
  };

  return format.replace(
    /(yyyy|y|GGGG|G|MMMM|MMM|MM|M|dd|d|EEEE|E|hh|h|HH|H|mm|m|ss|s|a)/g,
    (match) => {
      return formatMap[match] ? formatMap[match]() : match;
    }
  );
}
