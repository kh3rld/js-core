/**
 * Instructions

Create these functions which receive an array and a function each. Each element will return true if

    every: every element in the array respects the condition of the function.
    some: that returns true if at least one element in the array respects the condition of the function.
    none: that returns true if none of the elements in the array respects the condition of the function.

The use of [].every and [].some is forbidden for this exercise.
 */

// Every function
const every = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i], i, arr)) {
      return false;
    }
  }
  return true;
};

// Some function
const some = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return true;
    }
  }
  return false;
};

// None function
const none = (arr, callback) => {
  return every(arr, (element) => !callback(element));
};

const numbers = [1, 2, 3, 4, 5];

console.log(every(numbers, (num) => num > 0));
console.log(every(numbers, (num) => num > 2));

console.log(some(numbers, (num) => num % 2 === 0));
console.log(some(numbers, (num) => num > 5));

console.log(none(numbers, (num) => num > 5));
console.log(none(numbers, (num) => num % 2 === 0));
