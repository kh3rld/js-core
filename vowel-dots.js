/*
Instructions
Create a function named vowelDots that receives a string. Your function should return a new string with a . after every vowel.
Your RegEx should be stored in a variable named vowels.
    a, e, i, o and u are considered as vowels here.
 */
let vowels = /[aeiou]/gi;
function vowelDots(str) {
  const s = str.replace(vowels, (match) => `${match}.`);
  return s;
}

console.log(vowelDots("Hello Kherld"));
