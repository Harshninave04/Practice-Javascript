// During comparison data type should be of same type
// NOTE: === checks value strictly it means it checks it's data type also

console.log(5 > 3); // true
console.log(2 != 0); // true

console.log("2" > "5"); // false

console.log(null > 0); //false
console.log(null < 0); //false
console.log(null == 0); //false
console.log(null != 0); //true

console.log(undefined == 0) //false
console.log(undefined == null) //true
console.log(undefined != null) //false

console.log("4" === 4); //false



