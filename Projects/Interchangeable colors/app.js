// Select all elements with the class "btn" and store them in the btns variable
const btns = document.querySelectorAll(".btn");

// Get the body element of the document
const body = document.body;

// Iterate over each button in the btns NodeList
btns.forEach((btn) => {
  // Add a click event listener to each button
  btn.addEventListener("click", () => {
    // Get the color value associated with the clicked button
    color = btn.value;
    // Call the changeBackground function with the selected color
    changeBackground(color);
  });
});

// Define the changeBackground function that takes a color parameter
function changeBackground(color) {
  // Remove any existing classes from the body element
  body.className = "";

  // Use a switch statement to determine which color was passed and add corresponding class to the body
  switch (color) {
    case "purple":
      body.classList.add("purple");
      break;
    case "blue":
      body.classList.add("blue");
      break;
    case "red":
      body.classList.add("red");
      break;
    case "green":
      body.classList.add("green");
      break;
    case "yellow":
      body.classList.add("yellow");
      break;
    case "teal":
      body.classList.add("teal");
      break;
    case "orange":
      body.classList.add("orange");
      break;
    default:
      // Do nothing for other cases
      break;
  }
}
