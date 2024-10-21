/*
 * Instructions

Create a verydisco.mjs script that :

    takes the 1st argument from the command line (after the program name)
    makes it very disco:
        cut each word from this argument in 2 (rounded up),
        re-compose a word by concatenating the chunks in the other order
    display the result in console

If the argument passed is a sentence, each word of the sentence must be "very disco".

For example:

    discovery would print verydisco (🕺🏼) in console.
    Node is awesome would print deNo si omeawes in the console.

Notions

    Node process: argv
    nan-academy.github.io/js-training/examples/methods.js
    slice() method
    includes() method
    split() method
    join() method
    Math.ceil() function
*/

// Function to make a word "very disco"
function veryDisco(word) {
  const mid = Math.ceil(word.length / 2);
  return word.slice(mid) + word.slice(0, mid);
}

// Function to process the entire input string
function inputDisco(input) {
  return input.split(" ").map(veryDisco).join(" ");
}

// Get the input from command line arguments
const input = process.argv[2];

if (!input || !input.trim()) {
  console.log("Please provide a valid input string.");
  process.exit(1);
}

// Process the input and output the result
const result = inputDisco(input);
console.log(result);
