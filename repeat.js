/*
Instructions

Create a function named repeat that takes a string and a number as arguments, and returns the string repeated as many times as the number describes. It should function like String.repeat(), but of course you must make your own.
 */
function repeat(s,n) {
    return Array(n).fill(s).join('')
}
console.log(repeat("Hello", 4))