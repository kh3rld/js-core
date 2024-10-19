/*
 * Instructions

Create two functions that will work like _.throttle from lodash.

    throttle: don't worry about the options.
    opThrottle: implement the trailing and leading options.
 */

function throttle(func, delay) {
  let last = 0;
  return function () {
    const now = +new Date();
    if (now - last > delay) {
      func.apply(this, arguments);
      last = now;
    }
  };
}
