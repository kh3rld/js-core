/*
Instructions

Create three functions, which each accept an array as an argument.

    longWords: returns true if every element of the array is a string with at least 5 characters.

    oneLongWord: returns true if at least one element of the array is a string with 10 or more characters.

    noLongWords: returns true if there are no elements in the array which is a string with at least 7 characters.
 */

// Long Words
const longWords = (arr) => {
  return arr.every((word) => typeof word === "string" && word.length >= 5);
};

// One Long Word
const oneLongWord = (arr) => {
  return arr.some((word) => typeof word === "string" && word.length >= 10);
};

// No Long Words
const noLongWords = (arr) => {
  return arr.every((word) => typeof word === "string" && word.length < 7);
};

console.log(longWords(["apple", "banana", "cherry"]));
console.log(longWords(["apple", "pear", "kiwi"]));

console.log(oneLongWord(["short", "tiny", "lengthyword"]));
console.log(oneLongWord(["short", "tiny", "small"]));

console.log(noLongWords(["tiny", "small", "medium"]));
console.log(noLongWords(["tiny", "small", "biggest"]));
