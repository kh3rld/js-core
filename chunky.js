/*
Instructions

Create a function named chunk which accepts an array and an integer representing a size.

Your function will chunk the array into sub-arrays, and return an array with each sub-array as its elements. The length of each sub-array is denoted by the size argument.

If the array cannot be split evenly, the last sub-array will contain the remaining elements.
 */

function chunk(arr, size) {
  const r = [];
  for (let i = 0; i < arr.length; i += size) {
    const subArr = arr.slice(i, i + size);
    r.push(subArr);
  }
  return r;
}
