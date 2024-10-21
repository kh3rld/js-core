import { readdir } from "fs/promises";

// Function to retrieve a list of attendees from a specified directory
async function getAttendees(folderPath) {
  try {
    const filenames = await readdir(folderPath);
    const attendeePromises = filenames.map(async (filename) => {
      const [firstName, lastName] = filename.split("_");
      return `${lastName.slice(0, -5)} ${firstName}`;
    });

    const attendees = await Promise.all(attendeePromises);

    return attendees.sort((a, b) => a.localeCompare(b));
  } catch (err) {
    console.error("Error reading directory:", err);
    return [];
  }
}

async function displayAttendees(folderPath) {
  const attendees = await getAttendees(folderPath);
  attendees.forEach((attendee, index) => {
    console.log(`${index + 1}. ${attendee}`);
  });
}

const folderPath = process.argv[2];

if (!folderPath) {
  console.error("Please provide a directory.");
} else {
  displayAttendees(folderPath);
}
