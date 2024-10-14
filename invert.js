function invert(obj) {
  const inverted = {};
  for (const [key, value] of Object.entries(obj)) {
    if (inverted.hasOwnProperty(value)) {
      throw new Error(`Duplicate value found: ${value} for key ${key}.`);
    }
    inverted[value] = key;
  }
  return inverted;
}

// const original = { "Kherld": 1, "Nerd": 2, "Me": 3 };
// const inverted = invert(original);
// console.log(inverted);