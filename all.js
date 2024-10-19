/*
 * Instructions

Create a function named all that works like Promise.all but with objects (instead of arrays).
Code provided

    The provided code will be added to your solution, and does not need to be submitted.

Promise.all = undefined
*/

async function all(promises) {
  if (!promises) return {};
  let obj = new Object();
  let err;
  for (const [k, v] of Object.entries(promises)) {
    if (typeof v != "object") {
      obj[k] = v;
      continue;
    }
    await v.then((res) => (obj[k] = res)).catch((error) => (err = error));
  }
  if (err) throw err;
  return obj;
}
