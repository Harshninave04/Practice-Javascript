// Bad way : part 2

const secondbtn = document.querySelector(".second-btn");
secondbtn.onclick = function () {
  console.log("It's a bad way to use events.");
};

// Best way -
const best = document.querySelector(".best");
// best.addEventListener("click", function () {
//   console.log("Yeahhh this is the actual best way to play with events.");
// });
// We can even pass arrow function instead of normal function.
best.addEventListener("click", greeting);
function greeting() {
  console.log("Yeahhh this is the actual best way to play with events.");
}
