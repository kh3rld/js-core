/*
Instructions

Create a function named nasa that takes a number N as an argument and returns a string with all numbers from 1 to N separated by spaces. There are three exceptions:

    Convert numbers which are divisible by 3 to "NA".
    Convert numbers which are divisible by 5 to "SA".
    Convert numbers which are divisible by 3 and 5 to "NASA".

 */

function nasa(N) {
  let r = "";
  let cur = 1;
  while (cur <= N) {
    if (cur % 3 === 0 && cur % 5 === 0) {
      r += "NASA";
    } else if (cur % 3 === 0) {
      r += "NA";
    } else if (cur % 5 === 0) {
      r += "SA";
    } else {
      r += cur;
    }
    if (cur < N) {
      r += " ";
    }
    cur++;
  }

  return r;
}
