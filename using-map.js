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
    .map((word) => capitalize(word))
    .join(" ");
}

function cap(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// Fahrenheit to Celsius
function fahrenheitToCelsiusFormula(num) {
  return String(Math.floor((num - 32) * (5 / 9))) + "°C";
}

function fahrenheitToCelsius(arr) {
  const celcuis = arr.map((temp) => fahrenheitToCelsiusFormula(parseInt(temp)));
  return celcuis;
}

// Trim Temp
const trimTemp = (arr) => {
  return arr.map((obj) => ({
    city: obj.city,
    temperature: obj.temperature.replace(/\s+/g, ""),
  }));
};

// Temp Forecasts
const tempForecasts = (arr) => {
  return arr.map((obj) => {
    const celsius = Math.floor((parseFloat(obj.temperature) - 32) * (5 / 9));
    return `${celsius}°Celsius in ${obj.city}, ${
      obj.state.charAt(0).toUpperCase() + obj.state.slice(1)
    }`;
  });
};

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
