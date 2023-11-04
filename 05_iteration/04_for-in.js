// for in - The "for...in" loop in javascript is used to iterate over the enumerable properties of an object. It is a way to loop through the keys(property names) of an object.

// Object
const language = {
  js: "javascript",
  py: "python",
  cpp: "c++",
  java: "java language for android",
};
for (const key in language) {
  console.log(`${key} shortcut is for ${language[key]}`);
}
console.log("+++++++++++++++++++++++++++++++++++++++++++++++");

var resume = {
  about: "Harsh Ninave",
  education: "Btech",
  salary: "2341234",
  city: "diamond Nagar",
};

for (const key in resume) {
  console.log(`${key}: ${resume[key]}`);
}

const object = {
  a: 1,
  b: 2,
  c: 3,
};

for (let properties in object) {
  console.log(`${properties}: ${object[properties]}`);
}
