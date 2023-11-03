//Object destructuring- In Object destructuring order doesn't matter but the name does matter

const student = {
  Name: "harsh",
  fullName: "Harsh Ninave",
  Age: 19,
  work: "Student",
  status: "unmarried",
};
// above student is a simple object !
// In object destructuring, name is important to get the perfect value;
const { Name, fullName, Age, work, status } = student;
// This is object destructuring
console.log(Name);
console.log(fullName);
console.log(Age);
console.log(work);
console.log(status);
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

const person = {
  name: "John Doe",
  age: 30,
  gender: "Male",
  country: "USA",
};

// Here we've renamed the variable name while destructuring

const { name: firstName, age: aged, gender: sex, country: origin } = person;
console.log(aged);
console.log(firstName);
console.log(sex);
console.log(origin);
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++");
const { name, age, gender, country } = person;
console.log(name);
console.log(age);
console.log(gender);
console.log(country);
