/*
Instructions

Create the following functions:

    id that takes one argument and returns it.
    getLength that takes an array or a string and returns its length.

 */
let arg = 9
const id = (arg) => arg
console.log(id(arg))
function getLength(arr = ["string"]) {
    return arr.length
}