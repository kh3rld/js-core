import { readdir, readFile, writeFile } from "fs/promises";
import { existsSync } from "fs";

const guestDir = process.argv[2] ?? "./guests";
const shoppingListFile = process.argv[3] ?? "shopping-list.json";

let drinkWishers = {
  beer: 0,
  wine: 0,
  water: 0,
  soft: 0,
};

let foodWishers = {
  eggplants: 0,
  mushrooms: 0,
  hummus: 0,
  courgettes: 0,
  burgers: 0,
  sardines: 0,
  kebabs: 0,
  potatoes: 0,
};

let guestsCounter = 0;

const handleGuest = (guestInfo) => {
  if (guestInfo.answer === "yes") {
    guestsCounter++;
    foodWishers.potatoes++; // Everyone gets a potato

    if (guestInfo.drink) {
      drinkWishers[guestInfo.drink]++;
    }

    switch (guestInfo.food) {
      case "veggie":
      case "vegan":
        foodWishers.mushrooms += 3;
        foodWishers.eggplants++;
        foodWishers.hummus++;
        foodWishers.courgettes++;
        break;
      case "carnivore":
        foodWishers.burgers++;
        break;
      case "fish":
        foodWishers.sardines++;
        break;
      case "everything":
        foodWishers.kebabs++;
        break;
    }
  }
};

let shoppingList = {};

if (existsSync(shoppingListFile)) {
  try {
    const content = await readFile(shoppingListFile);
    shoppingList = content.length > 0 ? JSON.parse(content) : {};
  } catch (err) {
    console.error(
      `Failed to parse shopping list in ${shoppingListFile}: ${err}\nA new list will be created.`,
    );
  }
}

const filenames = (await readdir(guestDir)).filter((filename) =>
  filename.endsWith(".json"),
);
const guestsHandler = filenames.map(async (fileName) => {
  const content = await readFile(`${guestDir}/${fileName}`);
  const guestInfo = JSON.parse(content);
  handleGuest(guestInfo);
});
await Promise.all(guestsHandler);

if (!guestsCounter) {
  console.log("No one is coming.");
  process.exit(0);
}

if (!shoppingList) {
  process.exit(0);
}

// Calculate drink quantities
if (drinkWishers.beer) {
  shoppingList["6-packs-beers"] = Math.ceil(drinkWishers.beer / 6);
}

["water", "wine", "soft"].forEach((product) => {
  if (drinkWishers[product]) {
    shoppingList[`${product}-bottles`] = Math.ceil(drinkWishers[product] / 4);
  }
});

// Calculate food quantities
["eggplants", "mushrooms", "hummus", "courgettes"].forEach((product) => {
  if (foodWishers[product]) {
    shoppingList[product] = Math.ceil(foodWishers[product] / 3);
  }
});

["burgers", "sardines", "kebabs", "potatoes"].forEach((product) => {
  if (foodWishers[product]) {
    shoppingList[product] = Math.ceil(foodWishers[product]);
  }
});

// Write the final shopping list
await writeFile(shoppingListFile, JSON.stringify(shoppingList, null, 2));
