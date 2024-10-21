/*
 * Instructions

Create a verydisco-forever.mjs script that does exactly the same as you verydisco script, but writes the result in a verydisco-forever.txt file instead of printing it in the console.
*/

import { writeFile } from "fs/promises";

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

// Process the input and prepare the result
const result = inputDisco(input);

// Write the result to a file
try {
  await writeFile("verydisco-forever.txt", result);
  console.log("Result written to verydisco-forever.txt");
} catch (error) {
  console.error("Error writing to file:", error);
}
