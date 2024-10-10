/**
 * Instructions

Create a function named forEach which takes an array as the first argument, 
a function as the second argument, and that works like the Array.prototype.forEach method.
 */

const forEach = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
};

forEach([1, 2, 3], (e, i) => {
  console.log(`Element at index ${i}: ${e}`);
});
