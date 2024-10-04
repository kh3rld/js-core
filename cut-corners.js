/*
Instructions

Create some functions which behave like JavaScript's Math rounding functions:

    round: which behaves similar to Math.round().
    ceil: which behaves similar to Math.ceil().
    floor: which behaves similar to Math.floor().
    trunc: which behaves similar to Math.trunc().

    Some restrictions apply:

        You may not use strings conversion to do it
        No bitwise operator
        No % operator


 */
function IntChecker(num) {
  const sign = num >= 0 ? 1 : -1;
  num = Math.abs(num);

  let placeValue = 1;
  let result = 0;

  while (placeValue <= num) {
    placeValue *= 10;
  }
  placeValue /= 10;

  while (placeValue >= 1) {
    while (result + placeValue <= num) {
      result += placeValue;
    }
    placeValue /= 10;
  }
  return sign * result;
}

function round(num) {
  let newInt = IntChecker(num);
  let dec = Math.abs(num - newInt);
  if (dec < 0.5) {
    return newInt;
  }
  return num >= 0 ? newInt + 1 : newInt - 1;
}

function ceil(num) {
  let newInt = IntChecker(num);
  if (num === newInt) {
    return num;
  }
  return num > 0 ? newInt + 1 : newInt;
}

function floor(num) {
  let newInt = IntChecker(num);
  if (num === newInt) {
    return num;
  }
  return num > 0 ? newInt : newInt - 1;
}

function trunc(num) {
  return IntChecker(num);
}
