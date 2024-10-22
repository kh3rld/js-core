import fs from "fs/promises";
import path from "path";

const [, , filePath, command, ...args] = process.argv;

async function main() {
  try {
    switch (command) {
      case "create":
        await createFile(filePath);
        break;
      case "delete":
        await deleteFile(filePath);
        break;
      case "add":
        await addItem(filePath, args);
        break;
      case "rm":
        await removeItem(filePath, args);
        break;
      case "ls":
      case undefined:
        await listItems(filePath);
        break;
      case "help":
        showHelp();
        break;
      default:
        console.error('Invalid command. Use "help" for a list of commands.');
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
}

async function createFile(filePath) {
  await fs.writeFile(filePath, JSON.stringify({}), "utf8");
  console.log(`Created file: ${filePath}`);
}

async function deleteFile(filePath) {
  await fs.unlink(filePath);
  console.log(`Deleted file: ${filePath}`);
}

async function addItem(filePath, args) {
  if (!args[0]) {
    console.error("No elem specified.");
    return;
  }

  const itemName = args[0];
  const quantity = parseInt(args[1]) || 1;

  const list = await readList(filePath);
  list[itemName] = (list[itemName] || 0) + quantity;

  await writeList(filePath, list);
  console.log(`Added ${quantity} to ${itemName}.`);
}

async function removeItem(filePath, args) {
  if (!args[0]) {
    console.error("No elem specified.");
    return;
  }

  const itemName = args[0];
  const quantity = parseInt(args[1]);

  const list = await readList(filePath);

  if (!list[itemName]) return;

  if (isNaN(quantity)) {
    delete list[itemName];
    console.log(`Removed ${itemName}.`);
  } else {
    list[itemName] -= quantity;
    if (list[itemName] <= 0) {
      delete list[itemName]; // Remove the item if the new value is 0 or less
      console.log(`Removed ${itemName}.`);
    } else {
      console.log(`Subtracted ${quantity} from ${itemName}.`);
    }
  }

  await writeList(filePath, list);
}

async function listItems(filePath) {
  const list = await readList(filePath);
  if (Object.keys(list).length === 0) {
    console.log("Empty list.");
    return;
  }

  for (const [key, value] of Object.entries(list)) {
    console.log(`- ${key} (${value})`);
  }
}

async function readList(filePath) {
  try {
    const data = await fs.readFile(filePath, "utf8");
    return JSON.parse(data);
  } catch {
    return {}; // Return an empty object if the file doesn't exist
  }
}

async function writeList(filePath, list) {
  await fs.writeFile(filePath, JSON.stringify(list, null, 2), "utf8");
}

function showHelp() {
  console.log(`Commands:
- create: takes a filename as argument and create it (should have .json extension)
- delete: takes a filename as argument and delete it
- add <item> [quantity]: adds a specified quantity of an item to the list
- rm <item> [quantity]: removes a specified quantity of an item from the list
- ls: lists all items in the shopping list
- help: prints this help message`);
}

main();
