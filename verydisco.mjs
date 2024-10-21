// Function to make a word "very disco"
function makeVeryDisco(word) {
  const mid = Math.ceil(word.length / 2);
  const firstHalf = word.slice(0, mid);
  const secondHalf = word.slice(mid);
  return secondHalf + firstHalf;
}

// Main function to process the input
function main() {
  const args = process.argv.slice(2); // Get command line arguments
  if (args.length === 0) {
    console.log("Please provide a sentence as an argument.");
    return;
  }

  const input = args.join(" ");
  const words = input.split(" ");
  const discoWords = words.map(makeVeryDisco);
  const result = discoWords.join(" ");

  console.log(result);
}

main();
