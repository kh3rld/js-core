/**
 * Instructions

Create four functions:

    fold that receives an array, a function and an accumulator, in this order, and applies the function in the elements of the array starting on the left.

    foldRight that receives an array, a function and an accumulator, in this order, and applies the function in the elements of the array starting on the right.

    reduce that works just like the method [].reduce when you don't specify an accumulator. The arguments should be an array and a function. The starting value of your acc must be the first value of the array. If your array is less than 1 argument you should throw an error.

    reduceRight like reduce, from the last value to the first

Example:

const adder = (a, b) => a + b
fold([1, 2, 3], adder, 2) // returns 8 (2 + 1 + 2 + 3)
foldRight([1, 2, 3], adder, 2) // returns 8 (2 + 3 + 2 + 1)
reduce([1, 2, 3], adder) // returns 6 (1 + 2 + 3)
reduceRight([1, 2, 3], adder) // returns 6 (3 + 2 + 1)

The use of [].reduce and [].reduceRight is forbidden for this exercise.
 */

// Fold function
const fold = (arr, fn, acc) => {
  for (let i = 0; i < arr.length; i++) {
    acc = fn(acc, arr[i]);
  }
  return acc;
};

// FoldRight function
const foldRight = (arr, fn, acc) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    acc = fn(acc, arr[i]);
  }
  return acc;
};

// Reduce function
const reduce = (arr, fn) => {
  if (arr.length < 1) throw new Error("Array must have at least one element");
  let acc = arr[0];
  for (let i = 1; i < arr.length; i++) {
    acc = fn(acc, arr[i]);
  }
  return acc;
};

// ReduceRight function
const reduceRight = (arr, fn) => {
  if (arr.length < 1) throw new Error("Array must have at least one element");
  let acc = arr[arr.length - 1];
  for (let i = arr.length - 2; i >= 0; i--) {
    acc = fn(acc, arr[i]);
  }
  return acc;
};

const adder = (a, b) => a + b;

console.log(fold([1, 2, 3], adder, 2));
console.log(foldRight([1, 2, 3], adder, 2));
console.log(reduce([1, 2, 3], adder));
console.log(reduceRight([1, 2, 3], adder));
