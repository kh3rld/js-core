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
