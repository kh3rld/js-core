/*
 * Instructions

Create two functions:

    race: that works like Promise.race.
    some: that takes an array of promises or values, and count number. It should return the first count resolved values. Empty arrays or a count of 0 return a promise resolving to undefined.
*/

async function race(args) {
  let newProm = new Promise((res, rej) => {
    args.forEach((promise) => {
      promise.then(res, rej);
    });
  });
  return newProm;
}

async function some(args, count) {
  if (!args.length || !count) return Promise.resolve([]);
  let newArr = new Array(args.length);
  await new Promise((res, rej) => {
    args.forEach((promise, i) => {
      promise.then(
        (x) => {
          newArr[i] = x;
          count--;
          if (count <= 0) return res();
        },
        (y) => {
          newArr[i] = y;
          count--;
          if (count <= 0) return rej();
        },
      );
    });
  });
  newArr = newArr.filter((x) => x !== false);
  return newArr;
}
