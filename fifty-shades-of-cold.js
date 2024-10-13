/**
 * Instructions

You've been asked to freshen up a webpage, by displaying shades of cold colors.

Check the colors array provided in the data file below.

Write the generateClasses function. It creates a <style> tag inside the <head>. It should generate one class for each color in the colors array, which sets the background attribute like so:

.blue {
  background: blue;
}

Write the generateColdShades function which creates a <div> for each color of the colors array, whose name contains aqua, blue, turquoise, green, cyan, navy or purple. Each <div> must have the corresponding generated class and display the name of the color, like following:

<div class="blue">blue</div>

The function choseShade is triggered when clicking on a div. Write the body of this function. It accepts the shade of the clicked element as an argument, and replaces all the classes of all the other elements by the chosen shade.
Files

You only need to create & submit the JS file fifty-shades-of-cold.js, we're providing you the following files to download and test locally:

    the HTML file fifty-shades-of-cold.html to open in the browser, which includes:
        the JS script running some code, and which will enable you to run yours

    the data file fifty-shades-of-cold.data.js from which you can import colors.

    feel free to use the CSS file fifty-shades-of-cold.data.css as it is or you can also modify it.

 */

import { colors } from "./fifty-shades-of-cold.data.js";

export function generateClasses() {
  const head = document.getElementsByTagName("head")[0];
  const style = document.createElement("style");
  colors.forEach((color) => {
    style.innerHTML += `.${color} { background: ${color} }`;
  });
  console.log(style.innerHTML);
  head.appendChild(style);
}

export function generateColdShades() {
  const body = document.getElementsByTagName("body")[0];
  colors.forEach((color) => {
    if (color.match(/(aqua|blue|turquoise|green|cyan|navy|purple)/) !== null) {
      const div = document.createElement("div");
      div.classList.add(color);
      div.innerHTML = color;
      body.appendChild(div);
    }
  });
}

export function choseShade(shade) {
  document.querySelectorAll("div").forEach((div) => {
    div.className = shade;
  });
}
