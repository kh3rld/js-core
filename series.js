/*
 * Instructions

Create a function named series that takes an array of async functions. It must execute them in series and return the results in order.
*/

async function series(asyncFunctions) {
  const results = [];

  for (const fn of asyncFunctions) {
    if (typeof fn !== "function") {
      throw new TypeError("All items in the array must be functions");
    }
    const result = await fn(); // Call each async function and wait for its resolution
    results.push(result); // Store the result
  }

  return results;
}
