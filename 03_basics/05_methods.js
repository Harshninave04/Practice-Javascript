const person = {
  name: "Harsh",
  age: 19,
  status: "Single",
  greet: function () {
    return `Hello, My name is ${person.name} and I'm ${person.age} years old with the marietal status ${person.status}`;
  },
};
console.log(person.greet());
console.log(person.age);
