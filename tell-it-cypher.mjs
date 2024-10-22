import fs from "fs";
import { resolve } from "path";

// Function to read a file and encode its content to base64
async function encodeFile(inputFile, outputFile) {
  const data = await fs.promises.readFile(inputFile, "utf-8");
  const encodedData = Buffer.from(data).toString("base64");
  await fs.promises.writeFile(outputFile, encodedData, "utf-8");
  console.log(`Encoded content saved to ${outputFile}`);
}

// Function to read a base64 encoded file and decode its content
async function decodeFile(inputFile, outputFile) {
  const data = await fs.promises.readFile(inputFile, "utf-8");
  const decodedData = Buffer.from(data, "base64").toString("utf-8");
  await fs.promises.writeFile(outputFile, decodedData, "utf-8");
  console.log(`Decoded content saved to ${outputFile}`);
}

// Main function to handle arguments and call appropriate functions
async function main() {
  const inputFile = process.argv[2];
  const action = process.argv[3];
  let outputFile =
    process.argv[4] || (action === "encode" ? "cypher.txt" : "clear.txt");

  // Resolve paths for input and output files
  const resolvedInputFile = resolve(inputFile);
  const resolvedOutputFile = resolve(outputFile);

  try {
    if (action === "encode") {
      await encodeFile(resolvedInputFile, resolvedOutputFile);
    } else if (action === "decode") {
      await decodeFile(resolvedInputFile, resolvedOutputFile);
    } else {
      console.error('Invalid action. Use "encode" or "decode".');
      process.exit(1);
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

main().catch((error) => {
  console.error(`Unhandled error: ${error.message}`);
  process.exit(1);
});
