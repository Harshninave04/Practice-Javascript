// SpreadOperator - The spread operator is a new addition to the set of operators in JS EcmaScript6. It takes in an array and expands it into individual elements. The spread operator is commonly used to make shallow copies of JS objects

const items = ["Laptop", "Headphones", "Mobiles", "Mouse", "Keyboard"];
const items2 = ["Stand", "Wires", "Charger", "Medicine"];
const itemsArr = [...items, ...items2];
console.log(...items, items2, ...itemsArr);
const Items = ["Harsh", itemsArr];
console.log(...itemsArr);
console.log(itemsArr.length);
console.log(Items);

const obj1 = { x: 1, y: 2 };
const obj2 = { p: 3, q: 4 };
const obj = { ...obj1, ...obj2 };
// console.log(obj);
const OBJ = { ...obj1, ...obj2, r: 5, s: 6 };
console.log(OBJ);
