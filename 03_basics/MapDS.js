// Map is a built in data structure introduced in ES6 that allows you to store key-value pairs where both the keys and value can be of any data type. It is similar to an object, but with a few key differences:

// -> Keys can be of any data type : Maps allows you to use any data types as keys, including numbers, booleans, objects, and even other map instances.
// -> Main insertion order: Map preserves the order of key-value pairs as they were inserted, while objects key may not be guaranteed to be in a specific order.

// Definition : In JavaScript, a Map object is a collection of key-value pairs. It's similar to an Object, but the main difference is that Map allows keys of any type.

// Creating a Map
const myMap = new Map();

// Adding key-value pairs
myMap.set("name", "Harsh");
myMap.set("age", 19);
myMap.set("city", "Nagpur");
myMap.set("Profession", "Software Engineering");

// Using the keys and values with map()
const keysArray = Array.from(myMap.keys());
const valuesArray = Array.from(myMap.values());

// const deleteArray = Array.from(myMap.delete());

console.log(keysArray); // ['name', 'age', 'city']
console.log(valuesArray); // ['John', 25, 'ExampleCity']
console.log(myMap.size); // 4
console.log(myMap);
// console.log(deleteArray);

console.log("++++++++++++++++++++++++++++++++++++++++++");

for (let [key, value] of myMap) {
  console.log(`${key} -> ${value}`);
}
