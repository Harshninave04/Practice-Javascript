// Get the element

const monthEl = document.getElementById("month");
const dayEl = document.getElementById("day");
const dayNumEl = document.getElementById("day-number");
const year = document.getElementById("year");

const date = new Date();

// const month = date.getMonth();
monthEl.innerHTML = date.toLocaleDateString("en", {
  month: "long", // This line used to show the month Name ,ex: January,February,etc.
});

dayEl.innerHTML = date.toLocaleDateString("en", {
  weekday: "long",
});

dayNumEl.innerHTML = date.getDate();
year.innerHTML = date.getFullYear();
