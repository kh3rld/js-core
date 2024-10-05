/*
Instructions

Create a function named letterSpaceNumber that accepts a string; returning an array with every instance of a letter, 
followed by a space, followed by a number, only if that number has only one digit, and is not followed by any letter.
 */

function letterSpaceNumber(str) {
  const reg = /([a-zA-Z])\s([0-9])\b/g;
  const r = [];
  let match;
  while ((match = reg.exec(str)) !== null) {
    r.push(`${match[1]} ${match[2]}`);
  }
  return r;
}

console.log(letterSpaceNumber("example 1, example 20"));
