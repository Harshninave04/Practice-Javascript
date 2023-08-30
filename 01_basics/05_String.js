let name = "Harsh";
let myAge = 19;
// Below method is the normal method to print the string numbers or 
// concatinating any string.
console.log("My name is " + name + " and I'm " + myAge + " years old.")
// Below are the another method of writing any string with concatination.
// It is also known as string interpolation.

console.log(`My name is ${name} and i'm ${myAge} years old`);

let gameName = new String("Pubg");
console.log(gameName[0])
console.log(gameName[1])
console.log(gameName[2])
console.log(gameName[3])
console.log(gameName.toUpperCase())
console.log(gameName.length);

// For replacing something with something

const myName = "Harsh Ninave";

console.log(myName.replace(' ', ' Sanjay '))