// Get the element

const monthEl = document.getElementById("month");
const dayEl = document.getElementById("day");
const dayNumEl = document.getElementById("day-number");
const year = document.getElementById("year");
const time = document.getElementById("time");

const date = new Date();

const month = date.getMonth();
// en -> English
// long indicates the character string value
monthEl.innerHTML = date.toLocaleDateString("en", {
  month: "long", // This line used to show the month Name ,ex: January,February,etc.
});

// TimeStamps added to show the time on calendar
const timestamps = date.getTime();
let hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
let minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
let seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
hours = `${hours}:`;
minutes = `${minutes}:`;
seconds = `${seconds}`;
time.innerHTML = `${hours}${minutes}${seconds}`;

dayEl.innerHTML = date.toLocaleDateString("en", {
  weekday: "long",
});

dayNumEl.innerHTML = date.getDate();
year.innerHTML = date.getFullYear();
