const date = new Date();
console.log(date);

const todaysDate = date.getDate();
const month = date.getMonth();
const years = date.getFullYear();
const time = date.getTime();
const day = date.getDay();

console.log(todaysDate);
console.log(month);
console.log(years);
console.log(time);
console.log(day);

console.log(date.toDateString());
console.log(date.toTimeString());
