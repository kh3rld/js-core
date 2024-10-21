/*Instructions

Create a verydisco-reverso.mjs script that:

    takes the name of a file (with the extension) as a first argument
    reads this file
    deciphers the content of this file by reversing it from the very disco mode
    prints the result in the console

For example:

    Reading the verydisco content of your verydisco.txt file would print discovery in console.
*/

import fs from "fs/promises";

// Function to reverse the "very disco" transformation
function reverseDisco(word) {
  const mid = Math.ceil(word.length / 2); // Changed to Math.ceil
  return word.slice(mid) + word.slice(0, mid);
}

// Process input
function inputReverso(input) {
  // Renamed for clarity
  return input.split(" ").map(reverseDisco).join(" ");
}

// Read file and process its content
async function readFile(file) {
  try {
    const content = await fs.readFile(file, "utf-8");
    const reversed = inputReverso(content.trim());
    console.log(reversed);
  } catch (error) {
    console.error(`Error reading file:`, error);
    process.exit(1);
  }
}

// Get filename from command line arguments
const file = process.argv[2];
if (!file) {
  console.error("Please provide a file name."); // Fixed typo
  process.exit(1);
}

readFile(file);
