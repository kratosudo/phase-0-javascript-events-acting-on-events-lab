// Your code here
function moveDodgerLeft() {
  // Get the current position of the dodger
  const dodger = document.getElementById("dodger");
  const left = parseInt(dodger.style.left, 10);

  // Check if the dodger is not already at the left edge
  if (left > 0) {
    // Move the dodger 10 pixels to the left
    dodger.style.left = `${left - 10}px`;
  }
}

function moveDodgerRight() {
  // Get the current position of the dodger
  const dodger = document.getElementById("dodger");
  const left = parseInt(dodger.style.left, 10);

  // Check if the dodger is not already at the right edge
  if (left < 360) {
    // Assuming 360 is the right boundary
    // Move the dodger 10 pixels to the right
    dodger.style.left = `${left + 10}px`;
  }
}
