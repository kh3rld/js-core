/*
Create the following functions:

    Your solutions must use filter.

    filterShortStateName: accepts an array of strings, and returns only those strings which contain less than 7 characters.

    filterStartVowel: accepts an array of strings, and returns only those that start with any vowel (a,e,i,o,u).

    filter5Vowels: accepts an array of strings, and returns only those which contain at least 5 of any vowels (a,e,i,o,u).

    filter1DistinctVowel: accepts an array of strings, and returns only those which contain only one distinct vowel (a,e,i,o,u). For example, "Alabama" contains only 1 distinct vowel "a".

    multiFilter: accepts an array of objects, and returns only those which:
        the key capital contains at least 8 characters.
        the key name does not start with a vowel.
        the key tag has at least one vowel.
        the key region is not "South"

 */

// Filter Short State Name
function filterShortStateName(arr) {
  return arr.filter((name) => name.length < 7);
}

// Filter Start Vowel
function filterStartVowel(arr) {
  return arr.filter((name) =>
    ["a", "e", "i", "o", "u"].includes(name[0].toLowerCase())
  );
}

// Filter 5 Vowels
function filter5Vowels(arr) {
  return arr.filter(
    (name) =>
      name
        .toLowerCase()
        .split("")
        .filter((char) => ["a", "e", "i", "o", "u"].includes(char)).length >= 5
  );
}

// Filter 1 Distinct Vowel
function filter1DistinctVowel(arr) {
  const vowels = "aeiou";

  function hasOneDistinctVowel(str) {
    const uniqueVowel = new Set();

    for (const char of str.toLowerCase()) {
      if (vowels.includes(char)) {
        uniqueVowel.add(char);
      }
    }
    return uniqueVowel.size === 1;
  }
  return arr.filter(hasOneDistinctVowel);
}

// Multi Filter
function multiFilter(arr) {
  function startWithVowel(str) {
    return /^[aeiou]/i.test(str);
  }

  function hasVowel(str) {
    return /[aeiou]/i.test(str);
  }

  return arr.filter((obj) => {
    return (
      obj.capital &&
      obj.capital.length >= 8 &&
      obj.name &&
      !startWithVowel(obj.name) &&
      obj.tag &&
      hasVowel(obj.tag) &&
      obj.region &&
      obj.region !== "South"
    );
  });
}
