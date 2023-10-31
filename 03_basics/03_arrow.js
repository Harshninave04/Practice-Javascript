// This keyword 
const user = {
    username: "Harsh",
    lastname: "Ninave",
    phone: 9970936025,
    WelcomeMessage: function () {
        console.log(`${this.username} , I want to confess something to you that i love you from the bottom of my heart.`);
        console.log(this)
    }
}
// this keyword is used to referr the current context

// user.WelcomeMessage()
// user.username = "Gaurav"
// user.WelcomeMessage()
// console.log(this)


// Another Example

// const harsh = function one() {
//     let username = "harsh"
//     console.log(this.username)
// }
// harsh()

// Another way of declaring function using the arrow function

const harsh1 = () => {
    let username = "nandini"
    console.log(username);
}
// harsh1()


// Arrow function for adding two numbers
const addTwo = (num1, num2) => {
  let username = "Harsh";
  // console.log(username);
  return num1 + num2;
};
// console.log(addTwo(34, 456));

// Another way of calling functions without asking for return
const addTwo1 = (num1, num2) => num1 + num2;
console.log(addTwo1(12, 12));
console.log(addTwo(235, 35));

multiplyNum = (num1, num2) => `${num1 * num2}`;

divNum = (d) => {
  console.log(`${d} of numbers , arrow function created!`);
};

console.log(`Multiplication of two argument is ${multiplyNum(2, 2)}`);

divNum("division");