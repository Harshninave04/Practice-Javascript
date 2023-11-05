// .map() - It is used to iterate over all the elements in an array, which results in a new array.

let peoples = ["Harsh", "Dev", "Girish", "Pravinya", "Reetik"];

let peopleName = peoples.map((person) => {
  return person;
});
console.log(peopleName);

// Create array with random numbers. Map over each item in that array, and multiply each item by 10
let arr = [1, 2, 3, 4, 5, 6];
let double = arr.map((num) => {
  return num * 5;
});
console.log(double);

let newArr = [23, 52, 32, 53, 15];
function operation(num) {
  return num * 5;
}

const operations = newArr.map(operation);
console.log(operations);