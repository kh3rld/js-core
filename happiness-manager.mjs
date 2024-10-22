import fs from "fs/promises";
import path from "path";

const DRINK_KEYS = {
  beers: "6-packs-beers",
  water: "water-bottles",
  wine: "wine-bottles",
  soft: "soft-bottles",
};

const FOOD_KEYS = {
  veggies: ["eggplants", "mushrooms", "hummus", "courgettes"],
  carnivores: "burgers",
  fish: "sardines",
  omnivores: "kebabs",
  potatoes: "potatoes",
};

// Read responses from JSON files
const readGuestResponses = async (guestDir) => {
  const responses = [];
  const files = await fs.readdir(guestDir);

  for (const file of files) {
    const data = await fs.readFile(path.join(guestDir, file), "utf-8");
    const guest = JSON.parse(data);

    if (guest.answer === "yes") {
      responses.push(guest);
    }
  }

  return responses;
};

// Calculate drinks and food requirements
const calculateRequirements = (responses) => {
  const requirements = {
    drinks: {},
    food: {},
    totalPotatoes: responses.length,
  };

  const drinkCounts = { beers: 0, water: 0, wine: 0, soft: 0 };
  const foodCounts = { veggies: 0, carnivores: 0, fish: 0, omnivores: 0 };

  responses.forEach((response) => {
    if (response.drink)
      drinkCounts[response.drink] = (drinkCounts[response.drink] || 0) + 1;
    if (response.food)
      foodCounts[response.food] = (foodCounts[response.food] || 0) + 1;
  });

  if (drinkCounts.beers) {
    requirements.drinks[DRINK_KEYS.beers] = Math.ceil(drinkCounts.beers / 6);
  }
  if (drinkCounts.water) {
    requirements.drinks[DRINK_KEYS.water] = Math.ceil(drinkCounts.water / 4);
  }
  if (drinkCounts.wine) {
    requirements.drinks[DRINK_KEYS.wine] = Math.ceil(drinkCounts.wine / 4);
  }
  if (drinkCounts.soft) {
    requirements.drinks[DRINK_KEYS.soft] = Math.ceil(drinkCounts.soft / 4);
  }

  if (foodCounts.veggies) {
    requirements.food[FOOD_KEYS.veggies[0]] = Math.ceil(foodCounts.veggies / 3);
    requirements.food[FOOD_KEYS.veggies[1]] = Math.ceil(foodCounts.veggies / 3);
    requirements.food[FOOD_KEYS.veggies[2]] = Math.ceil(foodCounts.veggies / 3);
    requirements.food[FOOD_KEYS.veggies[3]] = Math.ceil(foodCounts.veggies / 3);
  }
  if (foodCounts.carnivores) {
    requirements.food[FOOD_KEYS.carnivores] = foodCounts.carnivores;
  }
  if (foodCounts.fish) {
    requirements.food[FOOD_KEYS.fish] = foodCounts.fish;
  }
  if (foodCounts.omnivores) {
    requirements.food[FOOD_KEYS.omnivores] = foodCounts.omnivores;
  }

  return requirements;
};

// Main function to manage happiness
const manageHappiness = async (guestDir, outputFile) => {
  const responses = await readGuestResponses(guestDir);

  if (responses.length === 0) {
    console.log("No one is coming.");
    return;
  }

  const requirements = calculateRequirements(responses);
  let existingData = {};

  try {
    const data = await fs.readFile(outputFile, "utf-8");
    existingData = JSON.parse(data);
  } catch (error) {
    console.log(`Creating new file: ${outputFile}`);
  }

  Object.assign(existingData, requirements);
  await fs.writeFile(outputFile, JSON.stringify(existingData, null, 2));
  console.log(`Updated shopping list: ${outputFile}`);
};

const [guestDir, outputFile] = process.argv.slice(2);

manageHappiness(guestDir, outputFile).catch(console.error);
