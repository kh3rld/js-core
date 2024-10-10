/**
 * Instructions

Create the following functions with the "currying" process. Those functions should accept only one argument each.

    mult2: that multiplies two numbers.
    add3: that adds three numbers.
    sub4: that subtracts four numbers in the given order: first number minus second number etc.
 */

// Multiplies two numbers
const mult2 = (a) => (b) => a * b;

// Adds three numbers
const add3 = (a) => (b) => (c) => a + b + c;

// Subtracts four numbers in order
const sub4 = (a) => (b) => (c) => (d) => a - b - c - d;

console.log(mult2(3)(4));
console.log(add3(1)(2)(3));
console.log(sub4(10)(2)(3)(1));
