/*
 * Instructions

Create a function named all that works like Promise.all but with objects (instead of arrays).
Code provided

    The provided code will be added to your solution, and does not need to be submitted.

Promise.all = undefined
*/

function all(promises) {
  const entries = Object.entries(promises);
  const results = new Array(entries.length);
  let completed = 0;

  return new Promise((resolve, reject) => {
    for (let [key, promise] of entries) {
      Promise.resolve(promise)
        .then((value) => {
          results[entries.findIndex(([k]) => k === key)] = value; // Assign value to correct index
          completed++;
          if (completed === entries.length) {
            resolve(
              Object.fromEntries(
                entries.map(([key], index) => [key, results[index]]),
              ),
            );
          }
        })
        .catch(reject); // Reject if any promise fails
    }
  });
}
