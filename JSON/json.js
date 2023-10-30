// What is JSON?
/*JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate. It is often used to transmit data between a server and a web application as an alternative to XML (eXtensible Markup Language).*/

const data = {
  name: "Harsh",
  age: 19,
  isStudent: true,
  height: 5.5,
  weightInKG: 45,
  address: {
    street: "123 Main St",
    city: "Anytown",
    zipCode: "12345",
  },
};

// JSON.Stringify
// JSON.stringify is a built-in JavaScript function that converts a JavaScript object or value into a JSON-formatted string.
const jsonString = JSON.stringify(data);
const parsedString = JSON.parse(jsonString);
console.log(jsonString);
console.log(parsedString);
