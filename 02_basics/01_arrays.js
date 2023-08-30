//arrays

const arr = [1, 2, 3, 4];
console.log(arr[3]);

let hero = ["IronMan", "Batman", "SuperMan"];
console.log(hero[2]);

const arr1 = new Array(123, 1241, 23124, 12312, 312);
console.log(arr1[3]);

//Array Methods

arr.push(5);
arr.push(6); // Add last element
console.log(arr)

arr.pop(); // Remove last element
console.log(arr);

arr.unshift(0); // Add values in first position
console.log(arr);

arr.shift();  // Remove element from first position
console.log(arr)

console.log(arr.includes(4))  // It checks 4 is in array or not 
console.log(arr.includes(9)) // gives output in the form of boolean

// slice and spice

//slice
const fruits = ["apple", "banana", "cherry", "date"];
const slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); // Output: ["banana", "cherry"]
console.log(fruits); // Original array is unmodified: ["apple", "banana", "cherry", "date"]

//splice
/*
Syntax: array.splice(start, deleteCount, item1, item2, ...)

start: The index at which to start changing the array.
deleteCount: An integer indicating the number of elements to remove.
item1, item2, ...: The elements to add to the array at the specified index.
*/
const fruits1 = ["apple", "banana", "cherry", "date"];
const removedFruits = fruits1.splice(1, 2, "grape", "kiwi");
console.log(removedFruits); // Output: ["banana", "cherry"]
console.log(fruits1); // Original array is modified: ["apple", "grape", "kiwi", "date"]
