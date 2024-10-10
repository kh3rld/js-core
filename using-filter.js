// Filter Short State Name
const filterShortStateName = (arr) => {
  return arr.filter((state) => state.length < 7);
};

// Filter Start Vowel
const filterStartVowel = (arr) => {
  return arr.filter((state) => /^[aeiou]/i.test(state));
};

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
