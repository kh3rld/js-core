/**
 * Instructions

Create the function currify that will curry any functions put as argument.

example:

const mult2 = (el1, el2) => el1 * el2
console.log(mult2(2, 2)) // result expected 4

const mult2Curried = currify(mult2)

console.log(mult2Curried(2)(2)) // result expected 4
// (same result, with a function that has technically only one argument)
 */

function currify(fn) {
  return function curried(...args) {
    // If the number of arguments is enough to call the function, do it
    if (args.length >= fn.length) {
      return fn(...args);
    }
    // Otherwise, return a function that collects more arguments
    return function (...nextArgs) {
      return curried(...args, ...nextArgs);
    };
  };
}

const mult2 = (el1, el2) => el1 * el2;
const mult2Curried = currify(mult2);
console.log(mult2(2, 2));
console.log(mult2Curried(2)(2));
