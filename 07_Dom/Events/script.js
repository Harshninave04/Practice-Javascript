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


// Event(e) Object

const para = document.querySelector(".para");
para.addEventListener("click", (event) => {
  console.log(event)
})

const form = document.querySelector("form");
const input = document.querySelector("input");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(input.value)
})

// Mouse Events
const one = document.querySelector(".click");
one.addEventListener("click", () => {
  one.classList.toggle("red");
});

const contextmenu = document.querySelector(".contextmenu");
contextmenu.addEventListener("contextmenu", () => {
  contextmenu.classList.toggle("blue");
});

const dbclick = document.querySelector(".dbclick");
dbclick.addEventListener("dblclick", () => {
  dbclick.classList.toggle("teal");
});

const mouseover = document.querySelector(".mseover");
mouseover.addEventListener("mouseover", () => {
  mouseover.classList.toggle("orange");
});