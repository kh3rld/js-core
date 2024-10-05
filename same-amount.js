/*
Instructions

Create a function named sameAmount, that takes three arguments: a string, and 2 regular expressions. Your function should return a boolean.

The objective is to confirm that the regular expressions match the string the same number of times.
 */
function sameAmount(str, reg1, reg2) {
  const r1 = new RegExp(reg1, "g");
  const r2 = new RegExp(reg2, "g");
  const count1 = (str.match(r1) || []).length;
  const count2 = (str.match(r2) || []).length;
  return count1 === count2;
}
