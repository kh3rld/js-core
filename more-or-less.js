/*
Instructions

Create 4 functions:

    more that takes 1 argument and adds 1 to it.
    less that takes 1 argument and subtracts 1 from it.
    add that takes 2 arguments and adds them together.
    sub that takes 2 arguments and subtracts the second argument from the first.

All the functions must return the result of the operations specified above.
 */
const more = (n) => n + 1
const less = (n) => n - 1
const add = (n, n2) => n + n2
const sub = function (n, n2) { return n - n2 }
console.log(sub(3, 10));