function invert(obj) {
  const inverted = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      inverted[obj[key]] = key;
    }
  }
  return inverted;
}
// const original = { "Kherld": 1, "Nerd": 2, "Me": 3 };
// const inverted = invert(original);
// console.log(inverted);
