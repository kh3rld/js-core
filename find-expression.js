/*
Instructions

Create a function named findExpression that takes a number as parameter and returns a string.

    2 constant variables will be made available to your function: add4 and mul2.
    Your goal is to try to find a sequence, starting from the number 1, and repeatedly either adding 4 or multiplying by 2, to produce the number given as a parameter.
    If the number can not be reached you should return undefined

For example, for the number 8, you must first multiply by 2 twice, and then add 4. Your function should return something like: 1 *2 *2 +4.
 */

function findExpression(target) {
  const queue = [{ value: 1, expression: "1" }];
  const visited = new Set();

  while (queue.length > 0) {
    const { value, expression } = queue.shift();

    if (value === target) {
      return expression;
    }

    if (visited.has(value)) {
      continue;
    }
    visited.add(value);

    const newValue1 = value + 4;
    const newValue2 = value * 2;

    if (newValue1 <= target + 4) {
      queue.push({ value: newValue1, expression: expression + ` ${add4}` });
    }
    if (newValue2 <= target * 2) {
      queue.push({ value: newValue2, expression: expression + ` ${mul2}` });
    }
  }

  return undefined;
}
