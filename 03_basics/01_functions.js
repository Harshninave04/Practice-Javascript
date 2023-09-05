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