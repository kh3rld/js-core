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
