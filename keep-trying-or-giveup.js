/*
 * Instructions

Create a retry function, that takes 2 arguments:

    count: indicates maximum number of retries.
    callback: an async function that will be invoked for every attempt.

retry returns a function that invokes the callback function. That function passes its arguments to callback, and returns the value from callback.

The function returned by retry must catch errors from callback. After that function has caught count errors, it must throw an Error.

    if count is 3, callback will be invoked at most 4 times, the initial call plus 3 retries.

Create function named timeout, that takes 2 arguments:

    delay: indicates maximum wait time.
    callback: an asynchronous function that will be invoked.

timeout returns a function that invokes and returns the value from callback. The function must pass its arguments to callback. If callback does not resolve before delay, your function returns Error('timeout').
 */

"use strict";
function retry(count, callback) {
  let attempts = 0;

  return async function again(...args) {
    return await callback(...args).catch((err) => {
      if (attempts >= count) throw err;
      attempts++;
      return again(...args);
    });
  };
}

function timeout(delay, callback) {
  return async (...args) => {
    const timer = new Promise((resolve) => {
      setTimeout(() => {
        resolve(new Error("timeout"));
      }, delay);
    });
    return Promise.race([callback(...args), timer]).then((value) => {
      if (Object.entries(value).length) return value;
      throw value;
    });
  };
}
