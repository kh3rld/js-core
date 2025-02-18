/*
Instructions

Create a function hasCity that takes a string called country and an array of strings, which are cities of that country, which returns a new function. The new function takes a string, called city, as a parameter and which determines whether the array contains that string or not.

If it does, it should return the string <city> is a city from <country>, otherwise <city> is not a city from <country>.
 */

function hasCity(country, cities) {
  return function (city) {
    if (cities.includes(city)) {
      return `${city} is a city from ${country}`;
    } else {
      return `${city} is not a city from ${country}`;
    }
  };
}

const checkCityInFrance = hasCity("Kenya", ["Kisumu", "Nairobi", "Mombasa"]);
console.log(checkCityInFrance("Kisumu"));
console.log(checkCityInFrance("Berlin"));
