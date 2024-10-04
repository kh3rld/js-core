/*
Instructions

Create a function named flat that works like Array.flat(), except its first argument is the array.
Notions

    Flat

 */
function flat(array, depth = 1) {
  if (!Array.isArray(array)) {
    throw new Error("First argument must be an array.");
  }
  if (typeof depth !== "number" || depth < 0) {
    throw new Error("Depth must be a non-negative integer.");
  }

  const result = [];
  (function flatten(arr, d) {
    for (let item of arr) {
      if (Array.isArray(item) && d > 0) {
        flatten(item, d - 1);
      } else {
        result.push(item);
      }
    }
  })(array, depth);

  return result;
}
