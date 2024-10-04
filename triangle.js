/*
Instructions

Create a function named triangle that takes a string and a number as arguments. Your function will return a string representing a triangle.

The string will denote the characters which construct the triangle, and the number denotes its height.
Example

    * character and depth of 5:

*
**
***
****
*****

    No new line in last line
 */
function triangle(ch, h) {
  let result = "";
  for (let i = 1; i <= h; i++) {
    result += ch.repeat(i);
    if (i !== h) {
      result += "\n";
    }
  }
  return result;
}

console.log(triangle('*', 5));