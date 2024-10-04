/**
 * Instructions

Create some functions, which each take a string as an argument:

    cutFirst: returns the string with the first 2 characters removed.

    cutLast returns the string with the last 2 characters removed.

    cutFirstLast returns the string with the first 2 characters and the last 2 characters removed.

    keepFirst returns only the first 2 characters.

    keepLast returns only the last 2 characters.

    keepFirstLast returns the first 2 characters, and the last 2 characters.

 */

function cutFirst(s) {
    return s.slice(2);
}

function cutLast(s) {
    return s.slice(0, -2);
}

function cutFirstLast(s) {
    return s.slice(2, -2);
}

function keepFirst(s) {
    return s.slice(0, 2);
}

function keepLast(s) {
    return s.slice(-2);
}

function keepFirstLast(s) {
    return s.slice(0, 2) + s.slice(-2);
}

const str = "Hello, Kherld";

console.log(cutFirst(str));     
console.log(cutLast(str));       
console.log(cutFirstLast(str));  
console.log(keepFirst(str));     
console.log(keepLast(str));      
console.log(keepFirstLast(str)); 
