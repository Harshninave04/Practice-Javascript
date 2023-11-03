// What is Destructuring?
// Destructuring allows us to unpack the values from data structures (Arrays, Objects) into separate distinct variable.

// Here we've assigned an array to a variable
const [a, ...b] = ["one", "two", "third", "four", "five", true, 12];
console.log(b);
console.log(a);

const [firstname, lastname, age, ...data] = ["Harsh", "Ninave", 19, "Nagpur", true, 5.5];
console.log(data);
console.log(firstname);
