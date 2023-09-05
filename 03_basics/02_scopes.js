// We're having the 3 types ,let var and const

// # Example 1 

if (1) {
    let a = 20;
    var b = 30;
    const c = 50;
} // var is accessible out of the scope but let and const won't
// i.e. don't use var as a type 
// instead use let as a type

// console.log(a);
console.log(b);
// console.log(c);

// # Example 2

let a1 = 342;
const b1 = 394;
if (true) {
    let a1 = 340;
    const b1 = 2341;
    // let and const type is accessible to the scope only 
    // global scope is accessible to all
}

console.log(a1);
console.log(b1);

// let Array = [123, 234, 3545, 234];
// for (var i = 0; i < Array.length; i++) {
//     console.log(Array[i])
// }