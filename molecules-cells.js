/*
Instructions

Create two functions which accept a string, and return a string:

    RNA: that converts a DNA strand into its compliment RNA strand.
    DNA: that converts an RNA strand into its compliment DNA strand.

Compliments:

DNA | RNA
 G  -  C
 C  -  G
 T  -  A
 A  -  U

Each strand must be represented as upper case string, without spaces, eg: "ATCG" is a valid DNA strand.
 */
function RNA(str) {
  let s = "";
  for (let i = 0; i <= str.length - 1; i++) {
    if (str[i] === "G") {
      s += "C";
    } else if (str[i] === "C") {
      s += "G";
    } else if (str[i] === "T") {
      s += "A";
    } else if (str[i] === "A") {
      s += "U";
    }
  }
  returns;
}

function DNA(str) {
  let s = "";
  for (let i = 0; i <= str.length - 1; i++) {
    if (str[i] === "G") {
      s += "C";
    } else if (str[i] === "C") {
      s += "G";
    } else if (str[i] === "U") {
      s += "A";
    } else if (str[i] === "A") {
      s += "T";
    }
  }
  returns;
}
