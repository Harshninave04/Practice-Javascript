// # Primitive datatypes

// There are 7 types of data types present :
// Strings ,Number ,Boolean ,null ,undefined ,Symbol ,BigInt

// Non-Primitive datatypes (Reference)

// Array ,Objects, Functions


/*JavaScript is a dynamically typed language, which means that data
types of variables are determined by the value they hold at runtime 
and can change throughout the program as we assign different values
to them*/

// 1. Number - Represents both integer and floating-point numbers.
let age = 30; // An integer
let price = 19.99; // A floating-point number

// 2. String - Represents text and is enclosed in single ('') or double ("") quotes.
let name = "John";
let greeting = 'Hello, World!';

// 3. Boolean - Represents true or false values.
let isStudent = true;
let isWorking = false;

// 4. Undefined - Represents a variable that has been declared but hasn't been assigned a value.
let undefinedVariable;

// 5. Null - Represents the intentional absence of any object value.
let emptyValue = null;

// 6. Object - Represents a collection of key-value pairs (properties).
let person = {
    firstName: "Harsh Sanjay",
    lastName: "Ninave",
    age: 19,
    clgName: "JD COLLEGE OF ENGINEERING AND MANAGEMENT",
    bestFriend: "DEV"
};

// 7. Array - Represents an ordered list of values.
let colors = ["red", "green", "blue"];
let numbers = [1, 2, 3, 4, 5];

// 8. Function - Represents a reusable block of code.
function add(a, b) {
    return a + b;
}

// 9. Symbol - Represents a unique and immutable value often used as an object property key.
const uniqueSymbol = Symbol("description");

// 10. BigInt - Represents large integers beyond the capability of the Number data type.
let bigIntValue = 1234567890123456789012345678901234567890n;

// 11. Date - Represents date and time values.
let currentDate = new Date();

// 12. Regular Expression (RegExp) - Represents patterns used for matching strings.
let regexPattern = /pattern/;

// 13. Map - Represents a collection of key-value pairs with the keys maintaining their original order.
let mapExample = new Map();

// 14. Set - Represents a collection of unique values.
let setExample = new Set();

// 15. ArrayBuffer - Represents a fixed-length binary data buffer.
let buffer = new ArrayBuffer(16);

// 16. DataView - Allows you to read and write values in an ArrayBuffer.
let dataView = new DataView(buffer);

// 17. Int8Array, Uint8Array, and others - Typed arrays for handling binary data.
let int8Array = new Int8Array(buffer);
let uint8Array = new Uint8Array(buffer);

// 18. Promise - Represents a value that might be available now, in the future, or never.
let promiseExample = new Promise((resolve, reject) => {
    // Async operation
    resolve("Data is ready!");
});

// 19. Error - Represents an error object used for error handling.
try {
    throw new Error("This is an error message");
} catch (error) {
    console.error(error.message);
}

// 20. typeof - Use the typeof operator to determine the data type of a value.
// console.log(typeof age); // "number"
// console.log(typeof name); // "string"
// console.log(typeof isStudent); // "boolean"
// console.log(typeof person); // "object"
// console.log(typeof add); // "function"


// console.log(person)


console.log(add(4, 2)); // Calling function by passing arguments


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// We're having two types of memory
// Stack memory and Heap memory
