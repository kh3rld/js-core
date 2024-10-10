/*
Instructions

Create the following functions, which each take an array as the first argument, and a function as the second argument.

    filter: that works like the [].filter method.

    reject: that works like the reject function from lodash.

    partition: that works like the partition function from lodash.
 */
// Custom filter function
const filter = (arr, callback) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
};

// Custom reject function
const reject = (arr, callback) => {
  return filter(arr, (element, index, array) => {
    return !callback(element, index, array);
  });
};

// Custom partition function
const partition = (arr, callback) => {
  const truthy = [];
  const falsy = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      truthy.push(arr[i]);
    } else {
      falsy.push(arr[i]);
    }
  }
  return [truthy, falsy];
};

const numbers = [1, 2, 3, 4, 5];

// Using the custom filter function
const evens = filter(numbers, (num) => num % 2 === 0);
console.log(evens);

// Using the custom reject function
const odds = reject(numbers, (num) => num % 2 === 0);
console.log(odds);

// Using the custom partition function
const [evenPart, oddPart] = partition(numbers, (num) => num % 2 === 0);
console.log(evenPart);
console.log(oddPart);
