/*
Instructions

Create a function named pyramid which works just like your triangle function. But, it should be pyramid shaped.
Output example

    * character and depth of 5 :

    *
   ***
  *****
 *******
*********

    No new line in last line
 */
function pyramid(char, h) {
  let res = "";
  for (let i = 0; i < h; i++) {
    let spaces = " ".repeat((h - i - 1) * char.length);
    let chars = char.repeat(i * 2 + 1);
    if (i !== h - 1) {
      res += spaces + chars + "\n";
    } else {
      res += spaces + chars;
    }
  }
  return res;
}

console.log(pyramid("{}", 12));
