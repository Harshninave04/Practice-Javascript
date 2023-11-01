let identity = {
  first_name: "Harsh",
  last_name: "Ninave",
  University: "JD College of Engineering and Management",
  Year: "Third",
  Address: {
    city: "Nagpur",
    state: "Maharashtra",
    Plot_No: 72,
  },
  Hobbies: ["Playing cricket", "Watching porn", "Coding"],
};

console.log(identity.first_name.toUpperCase());
console.log(identity.Address.state.toUpperCase());
console.log(identity.first_name, identity.last_name);
console.log(identity.Hobbies[2], identity.Hobbies[1]);

// Array objects -

let routine = [
  {
    id: 1,
    name: "Harsh",
    email: "harsh@ninave.com",
  },
  {
    id: 2,
    name: "Dev",
    email: "dev@mulkalwar.com",
  },
  {
    id: 3,
    name: "Yash",
    email: "yash@ingole.com",
  },
];

console.log(routine[2].name);
console.log(routine[2].email);
console.log(routine[2].id);

console.log(routine[1].name);
console.log(routine[1].email);
console.log(routine[1].id);

const routineJSON = JSON.stringify(routine);
console.log(routineJSON);



// Enhanced Object Literals - It is introduced in ECMAscript 6, are a set of enhancements to the syntax for defining objects in JavaScript. This enhancement make it more convenient and concise to define object properties and methods
console.log("Enhanced Object Literals")
function user(name,age,sex,education,email) {
  return {
    "name": name,
    "age": age,
    "sex": sex,
    "education": education,
    "email": email
  }
};
const harsh = user("Harsh Ninave", 19, "Male", "Btech Engineering", "harshninave58@gmail.com");
const nandini = user("Nandini",17,"Female","Computer Science","nandinininave17@gmail.com")
console.log(harsh);
console.log(nandini)