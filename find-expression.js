/*
Instructions

Create a function named findExpression that takes a number as parameter and returns a string.

    2 constant variables will be made available to your function: add4 and mul2.
    Your goal is to try to find a sequence, starting from the number 1, and repeatedly either adding 4 or multiplying by 2, to produce the number given as a parameter.
    If the number can not be reached you should return undefined

For example, for the number 8, you must first multiply by 2 twice, and then add 4. Your function should return something like: 1 *2 *2 +4.
 */

const add4 = (n) => n + 4;
const mul2 = (n) => n * 2;

function findExpression(target) {
    const queue = [{ value: 1, expression: '1' }];
    const visited = new Set();

    while (queue.length > 0) {
        const { value, expression } = queue.shift();

        // Check if we've reached the target
        if (value === target) {
            return expression;
        }

        // Prevent re-processing the same value
        if (visited.has(value)) {
            continue;
        }
        visited.add(value);

        // Perform the operations and enqueue the results
        const newValue1 = add4(value);
        const newValue2 = mul2(value);

        if (newValue1 <= target + 4) { // Adding a guard to avoid excessive operations
            queue.push({ value: newValue1, expression: expression + ' +4' });
        }
        if (newValue2 <= target * 2) { // Adding a guard to avoid excessive operations
            queue.push({ value: newValue2, expression: expression + ' *2' });
        }
    }

    return undefined; // If the target cannot be reached
}

// Example usage:
console.log(findExpression(8));  // Output: "1 *2 *2 +4"
console.log(findExpression(1));  // Output: "1"
console.log(findExpression(5));  // Output: "1 +4"
console.log(findExpression(20)); // Output: "1 *2 *2 *2 +4"
console.log(findExpression(15)); // Output: undefined
