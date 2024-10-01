/*
Instructions

Create 3 functions:

    first: that takes an array or a string and returns its first element or character.

    last: that takes an array or a string and return its last element or character.

    kiss: that takes an array or string, and returns an array of 2 elements. The returned array should contain the last and first elements or characters, in that order.

 */
let arr = ["hello", "World", "I", "am", "Here"]
function first(arr) {
    return arr[0]
}
console.log(first(arr))
function last(arr) {
    return arr[arr.length - 1]
}
console.log(last(arr))
function kiss(arr) {
    return [arr[arr.length - 1], arr[0]];
}
console.log(kiss(arr))