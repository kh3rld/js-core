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
const filter5Vowels = (arr) => {
  return arr.filter((state) => {
    const vowelCount = (state.match(/[aeiou]/gi) || []).length;
    return vowelCount >= 5;
  });
};

// Filter 1 Distinct Vowel
const filter1DistinctVowel = (arr) => {
  return arr.filter((state) => {
    const distinctVowels = new Set(state.match(/[aeiou]/gi));
    return distinctVowels.size === 1;
  });
};

// Multi Filter
const multiFilter = (arr) => {
  return arr.filter(
    (obj) =>
      obj.capital.length >= 8 &&
      !/^[aeiou]/i.test(obj.name) &&
      /[aeiou]/i.test(obj.tag) &&
      obj.region !== "South"
  );
};
