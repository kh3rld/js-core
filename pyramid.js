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
  let result = "";
  const charLength = char.length;

  for (let i = 1; i <= h; i++) {
    let chars = char.repeat(2 * i - 1);
    let baseWidth = charLength * (2 * h - 1);
    let levelWidth = charLength * (2 * i - 1);
    let spaces = " ".repeat((baseWidth - levelWidth) / 2);
    if (i !== h) {
      result += spaces + chars + "\n";
    } else {
      result += spaces + chars;
    }
  }
}
