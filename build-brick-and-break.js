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

export const build = (bricks) => {
  let count = 0;
  const interval = setInterval(() => {
    if (count >= bricks) {
      clearInterval(interval);
      return;
    }
    const brick = document.createElement("div");
    brick.id = `brick-${count + 1}`;
    if (count % 3 === 1) {
      brick.dataset.foundation = "true";
    }
    document.body.appendChild(brick);
    count++;
  }, 100);
};

export const repair = (...ids) => {
  for (let i = 0; i < ids.length; i++) {
    let div = document.getElementById(ids[i]);
    let r = ids[i].replace("brick-", "");
    if (parseInt(r) % 3 == 2) {
      div.dataset.repaired = "in progress";
    } else {
      div.dataset.repaired = "true";
    }
  }
};
export const destroy = () => {
  const last = document.querySelector("div:last-of-type");
  if (last) {
    last.remove();
  }
};
