/*Instructions

Create a verydisco-reverso.mjs script that:

    takes the name of a file (with the extension) as a first argument
    reads this file
    deciphers the content of this file by reversing it from the very disco mode
    prints the result in the console

For example:

    Reading the verydisco content of your verydisco.txt file would print discovery in console.
*/

import "fs";
// Function to reverse the "very disco" transformation
function reverseVeryDisco(word) {
  const mid = Math.ceil(word.length / 2);
  const firstHalf = word.slice(0, mid);
  const secondHalf = word.slice(mid);
  return secondHalf + firstHalf;
}

// Function to process the entire input string
function inputReverso(input) {
  return input.split(" ").map(reverseVeryDisco).join(" ");
}

// Get the filename from command line arguments
const filename = process.argv[2];

if (!filename) {
  console.log("Please provide the name of the file to read.");
  process.exit(1);
}

// Read the file content
fs.readFile(filename, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  const result = inputReverso(data.trim());
  console.log(result);
});
