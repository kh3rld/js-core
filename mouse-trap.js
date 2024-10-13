let recCircle = null;
let box = null;

function createCircle() {
  const circle = document.createElement("div");
  circle.className = "circle";
  circle.style.left = `${event.clientX - 25}px`;
  circle.style.top = `${event.clientY - 25}px`;
  document.body.appendChild(circle);
  recCircle = circle;
}

function moveCircle() {
  if (!recCircle) return;

  const radius = 25;
  const x = event.clientX - radius;
  const y = event.clientY - radius;

  //bounding rectangles
  const boxRect = box.getBoundingClientRect();
  const circRect = recCircle.getBoundingClientRect();

  //check if circle is inside the box
  const alreadyInX =
    circRect.left >= boxRect.left && circRect.right <= boxRect.right;
  const alreadyInY =
    circRect.top >= boxRect.top && circRect.bottom <= boxRect.bottom;

  if (alreadyInX && alreadyInY) {
    recCircle.style.left = `${Math.min(
      Math.max(x, boxRect.left),
      boxRect.right - 2 * radius
    )}px`;
    recCircle.style.top = `${Math.min(
      Math.max(y, boxRect.top),
      boxRect.bottom - 2 * radius
    )}px`;
    recCircle.style.background = "var(--purple)";
  } else {
    recCircle.style.left = `${x}px`;
    recCircle.style.top = `${y}px`;
    recCircle.style.background = "white";
  }
}

function setBox() {
  if (!box) {
    box = document.createElement("div");
    box.className = "box";

    const size = 200;
    const left = (window.innerWidth - size) / 2;
    const right = (window.innerHeight - size) / 2;

    box.style.left = `${left}px`;
    box.style.top = `${top}px`;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;

    document.body.appendChild(box);
  }
}

//eventlisteners
document.addEventListener("click", createCircle);
document.addEventListener("mousemove", moveCircle);

setBox();
export { createCircle, moveCircle, setBox };
