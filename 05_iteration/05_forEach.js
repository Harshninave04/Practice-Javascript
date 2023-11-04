// forEach is used only for the array

var a = [3, 452, 434, 345, 245, 234, 234, 26354, 245, 6];

a.forEach((variable) => {

    console.log(variable + 3);
})

// By default forEach doesn't make changes in the actual array


// Normal for Loop
const items = ["Mobile", "Laptop", "Keyboard", "Mouse", "Headphone", "Earbuds"];
for (let i = 0; i < items.length; i++){
    console.log(items[i]);
}
console.log("+++++++++++++++++++++++++++++++++++++++");

// For each method is the another way of iterating through all the elements/items from the array!

items.forEach((item) => { console.log(item); })


let numbers = [1, 2, 3, 4, 5, 6];
let sum = 0;
function adder(number) {
    sum += number;
}
numbers.forEach(adder);
console.log(sum)