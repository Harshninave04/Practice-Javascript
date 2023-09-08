// falsy values are
// ************************************
// false,0,-0,null,undefined,NaN,""

// truthy values are
// ************************************
// true,"0","false",[]," "


// To check object is empty or not

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty.")
}

const fruits = "Banana";
const keys = Object.keys(fruits);
const keys1 = Object.keys(fruits).length;
console.log(keys)
console.log(keys1)

// Nullish Coalescing Operator (??) : Null undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
val1 = null ?? undefined ?? 10;
console.log(val1)

//Ternary Operator

// condition ? true : false ;