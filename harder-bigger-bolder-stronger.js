/**
 * Instructions

Today, your mission is to build a 3-column brick tower, maintain it and finally break it.

    Create a function build which will create and display the amount of bricks passed as argument:
        each brick has to be created as a div and added to the page at a regular interval of 100ms.
        each brick will receive a unique id property, like the following:

    <div id="brick-1"></div>

        each brick in the middle column has to be set with the custom data attribute foundation, receiving the value true.

    Each one of the two emojis in the top-right corner fires a function on click:
        🔨: triggers the function repair. Write the body of that function. It receives any number of ids. For each id, it retrieves the HTML element, and sets the repaired custom attribute to in progress if it is a brick situated in the middle column, and true if not.
        🧨: triggers the destroy function. Write the body of that function. It removes the current last brick in the tower.

Files

You only need to create & submit the JS file build-brick-and-break.js, We're providing you the following file to download and test locally:

    the HTML file build-brick-and-break.html can be opened in the browser, which includes:
        the JS script running some code, and which will enable you to run your code.

    feel free to use the CSS file build-brick-and-break.data.css as it is or you can also modify it.
 */

//monoyers chart
export function generateLetters() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const ttlLetters = 120;
  const minFontSize = 11;
  const maxFontSize = 130;
  const weight1 = 300;
  const weight2 = 400;
  const weight3 = 600;

  for (let i = 0; i < ttlLetters; i++) {
    //create a div for each letter
    const letterDiv = document.createElement("div");

    //set random  letter
    const randomLetter = letters[Math.floor(Math.random() * letters.length)];

    //set letter as div content
    letterDiv.textContent = randomLetter;

    //set random font size between min and max
    const fontSize =
      minFontSize + (maxFontSize - minFontSize) * (i / (ttlLetters - 1));
    letterDiv.style.fontSize = `${fontSize}px`;

    //set random font weight
    if (i < ttlLetters / 3) {
      letterDiv.style.fontWeight = weight1;
    } else if (i < (2 * ttlLetters) / 3) {
      letterDiv.style.fontWeight = weight2;
    } else {
      letterDiv.style.fontWeight = weight3;
    }

    //add div to the document body
    document.body.appendChild(letterDiv);
  }
}
