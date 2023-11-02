// So the basic of function you already know it is used to execute the code/block of code number of times by just calling it by their function name.

function function_name() {
    console.log("H");
    console.log("a");
    console.log("r");
    console.log("s");
    console.log("h");
}

function_name();  // function call

// this are the basic way of accessing the function or executing the function block

// Let's work on something which you haven't in javascript

function even(number) {
    if (number % 2 == 0) {
        return number + " is even";
    } else {
        return number + " is odd";
    }
}

let ans = even(234);
console.log(ans)


// to check whether the user logged in or not

function loggedinMessage(username) {
    if (username === undefined) {
        return "Please enter the username";
    }

    return `${username} logged in successfully`;
}
console.log(loggedinMessage("Harsh"))
console.log(loggedinMessage())

// Add to cart option on any shopping website

function addToCart(num1, num2, num3) {
    return num1 + num2 + num3;
}
console.log((addToCart(23, 423, -12)))

//Calling any object through function

const user = {
    firstName: "Harsh",
    lastName: "Ninave"
}

function callingObject(anyObject) {
    return `Hello ${anyObject.firstName}`;
}
console.log(callingObject(user))


// How to access the array through function

const myNewArray = [233, 234, 252, 235];
function getArray(Array) {
    return Array[3];
}
console.log((getArray(myNewArray)))

// Arrow functions with return value

const subtracts = (num1, num2) => {
    return num1 - num2;
}
console.log(subtracts(5, 3));

// Function Expression

const clgName = function (clg) {
  //   console.log("JD colllege of Engineering!");
  console.log(`Hello ${clg}`);
};
// You've to call every function expression underneath of function declaration
clgName("JD");
clgName("Raisoni");
clgName("YCCE");
clgName("VNIT");
clgName("RamdeoBaba");

// Callback function-> When we provide function as an argument to other function that function is known as callback function
// Example 1
function someFun(name, fn) {
  console.log(`Hello ${name}`);
  fn(10);
}

//Callback function
someFun("Harsh", function (value) {
  console.log("Callback Function.");
  console.log(value);
});

// Example 2
function greeting(name, cb) {
  console.log(`Hello ${name}`);
  cb();
}
greeting("Harsh", function () {
  console.log("Callback function");
});



// Default Function Parameters - The default parameters in javascript are used for providing the default values to the function parameter in javascript when no values are provided


const count = (count = true) => {
    if (count == true) {
        for (let i = 0; i <= 5; i++){
            console.log(`Count: ${i}`);
        }
    }
}

console.log(count());
// In this function b=2 is default argument, when no argument is passed during function call b=2 will execute as default
function multiply(a, b = 2) { return a * b };
console.log(multiply(2));
console.log(multiply(10, 3))
console.log(multiply(9))