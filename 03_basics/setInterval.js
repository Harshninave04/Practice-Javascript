// SetInterval- It execute after every specific interval

// function interval() {
//   console.log("Executing multiple time!");
// }

const interval = setInterval(() => {
  console.log("Executing Intervally!");
}, 3000);

// clearInterval used to stop the interval running in console
setTimeout(() => {
  clearInterval(interval);
  console.log("interval stopped!");
}, 12000);

// SetTimeout- This is use to execute a function after certain time provide.

// setTimeout(() => {
//   console.log("This will executed after 3 second!");
// }, 3000);
// setTimeout(() => {
//   console.log("This will executed after 2 second!");
// }, 2000);
