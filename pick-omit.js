/*
Instructions

Create two functions which takes an object and a string or array of strings. They should return a new object which:

    pick: contains only those keys which appear in the string or array of strings.
    omit: contains only those keys which do not match the string, or do not appear in the array of strings.

    Those functions are pure and must not modify the given object
 */

function pick(obj, keys) {
  const keyArray = Array.isArray(keys) ? keys : [keys];
  const result = {};
  for (const key of keyArray) {
    if (obj.hasOwnProperty(key)) {
      result[key] = obj[key];
    }
  }
  return result;
}

function omit(obj, keys) {
  const keyArray = Array.isArray(keys) ? keys : [keys];
  const result = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && !keyArray.includes(key)) {
      result[key] = obj[key];
    }
  }
  return result;
}

const original = { Kherld: 1, Nerd: 2, Me: 3, I: 4 };

const picked = pick(original, ["Kherld", "Nerd"]);
console.log(picked);

const omitted = omit(original, "Nerd");
console.log(omitted);
