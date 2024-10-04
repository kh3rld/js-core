/**
 * Insuctions

Create some functions, which each take a sing as an argument:

    cutFirst: returns the sing with the first 2 characters removed.

    cutLast returns the sing with the last 2 characters removed.

    cutFirstLast returns the sing with the first 2 characters and the last 2 characters removed.

    keepFirst returns only the first 2 characters.

    keepLast returns only the last 2 characters.

    keepFirstLast returns the first 2 characters, and the last 2 characters.

 */

function cutFirst(s) {
  return s.length > 2 ? s.slice(2) : "";
}

function cutLast(s) {
  return s.length > 2 ? s.slice(0, -2) : "";
}
function cutFirstLast(s) {
  return s.length >= 4 ? s.slice(2, -2) : "";
}
function keepFirst(s) {
  return s.length >= 1 ? s.slice(0, 2) : "";
}
function keepLast(s) {
  return s.length >= 1 ? s.slice(-2) : "";
}
function keepFirstLast(s) {
  return s.length <= 4 ? s : s.slice(0, 2) + s.slice(-2);
}

const str = "Hello, Kherld";

console.log(cutFirst(str));
console.log(cutLast(str));
console.log(cutFirstLast(str));
console.log(keepFirst(str));
console.log(keepLast(str));
console.log(keepFirstLast(str));
