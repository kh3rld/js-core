/*
 * Instructions

Create two functions:

    race: that works like Promise.race.
    some: that takes an array of promises or values, and count number. It should return the first count resolved values. Empty arrays or a count of 0 return a promise resolving to undefined.
*/

function race(promises) {
  return new Promise((resolve, reject) => {
    for (const promise of promises) {
      Promise.resolve(promise).then(resolve).catch(reject);
    }
  });
}

async function some(promises, count) {
  if (!Array.isArray(promises) || count <= 0) {
    return undefined; // Return undefined for empty arrays or count of 0
  }

  const results = [];
  let completed = 0;

  return new Promise((resolve) => {
    for (const promise of promises) {
      Promise.resolve(promise)
        .then((value) => {
          results.push(value);
          completed++;
          if (completed === count) {
            resolve(results); // Resolve when we have the required count
          }
        })
        .catch(() => {
          // Ignore errors from individual promises
        });
    }
  });
}
