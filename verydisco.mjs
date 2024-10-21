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
