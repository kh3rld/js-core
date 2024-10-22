import { readdir } from "fs/promises";
import { readFileSync, writeFileSync } from "fs";
import { resolve, join } from "path";
// processes the guest name from the filename
function getGuestName(filename) {
  const nameParts = filename.slice(0, -5).split("_");
  return [nameParts[0], nameParts[1]];
}

//sorts the guest names alphabetically by last name, then by first name
function sortGuestNames(guests) {
  return guests.sort((a, b) => {
    const lastNameCompare = a[1].localeCompare(b[1]); // Compare last names
    if (lastNameCompare !== 0) {
      return lastNameCompare;
    }
    return a[0].localeCompare(b[0]); // If last names are the same, compare first names
  });
}

// formats the sorted guest list for writing to a file
function createGuestList(guests) {
  return guests
    .map((guest, index) => {
      return `${index + 1}. ${guest[1]} ${guest[0]}`; // Format: "1. LastName FirstName"
    })
    .join("\n");
}

// filters files by checking if the 'answer' in the JSON file is "yes"
function filterFilesWithYesAnswer(dirPath, files) {
  const validFiles = [];

  files = files.filter((file) => file.endsWith(".json"));

  files.forEach((filename) => {
    try {
      const filePath = join(dirPath, filename); // Get the full file path
      const fileContent = readFileSync(filePath, "utf-8");
      const parsedContent = JSON.parse(fileContent);

      if (parsedContent.answer === "yes") {
        validFiles.push(filename);
      }
    } catch (error) {
      console.error(`Error processing file ${filename}: ${error.message}`);
    }
  });

  return validFiles;
}

async function main() {
  const dirPath = process.argv[2] ? resolve(process.argv[2]) : process.cwd();

  try {
    const files = await readdir(dirPath);
    const validFiles = filterFilesWithYesAnswer(dirPath, files);
    const guestNames = validFiles.map(getGuestName);
    const sortedGuests = sortGuestNames(guestNames);
    const formattedList = createGuestList(sortedGuests);
    writeFileSync("vip.txt", formattedList, "utf-8");
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

main().catch((error) => {
  console.error(`Unhandled error: ${error.message}`);
  process.exit(1);
});
