// Cities Only
function citiesOnly(arr) {
  const city = arr.map((obj) => obj.city);
  return city;
}

// Upper Casing States
function upperCasingStates(arr) {
  let upp = arr.map((state) => capWords(state));
  return upp;
}

function capWords(str) {
  return str
    .split(" ")
    .map((word) => cap(word))
    .join(" ");
}

function cap(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// Fahrenheit to Celsius
function formula(num) {
  return String(Math.floor((num - 32) * (5 / 9))) + "°C";
}

function fahrenheitToCelsius(arr) {
  const celcuis = arr.map((temp) => formula(parseInt(temp)));
  return celcuis;
}

// Trim Temp
function trimTemp(arr) {
  return arr.map((obj) => {
    const trimmedTemp = obj.temperature.replace(/\s+/g, "");
    return {
      ...obj,
      temperature: trimmedTemp,
    };
  });
}

// Temp Forecasts
function tempForecasts(arr) {
  const cities = citiesOnly(arr);
  const states = upperCasingStates(arr.map((obj) => obj.state));
  return arr.map((obj, index) => {
    const trimmedTemp = obj.temperature.replace(/\s+g/, "");
    const tempInCelsius = formula(parseInt(trimmedTemp));
    return `${tempInCelsius}elsius in ${cities[index]}, ${states[index]}`;
  });
}

// console.log(
//   citiesOnly([
//     { city: "Los Angeles", temperature: "  101 °F   " },
//     { city: "San Francisco", temperature: " 84 ° F   " },
//   ])
// );

// console.log(upperCasingStates(["alabama", "new jersey"]));

// console.log(fahrenheitToCelsius(["68°F", "59°F", "25°F"]));

// console.log(
//   trimTemp([
//     { city: "Los Angeles", temperature: "  101 °F   " },
//     { city: "San Francisco", temperature: " 84 ° F   " },
//   ])
// );

// console.log(
//   tempForecasts([
//     {
//       city: "Pasadena",
//       temperature: " 101 °F",
//       state: "california",
//       region: "West",
//     },
//   ])
// );
