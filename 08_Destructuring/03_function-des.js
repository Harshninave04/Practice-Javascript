// Function Destructuring -

const person = {
  personName: "Harsh Ninave",
  personAge: 19,
  personProfession: "Engineer",
  personCountry: "India",
  personStatus: "Unmarried",
};

function printPersonInfo({ personName, personAge, personProfession, personCountry, personStatus }) {
  console.log(
    `Name: ${personName}, Age: ${personAge}, Profession: ${personProfession}, Country: ${personCountry}, Status: ${personStatus}`
  );
}
printPersonInfo(person);


// Destructuring Craziness !!


// Here data is the object
const data = {
  user: {
    id: 32,
    name: "harsh",
    age: 19,
    email: "harshninave58@gmail.com",
    address: {
      city: "Nagpur",
      country: "India"
    },
    hobbies: ["Cricket", "Programming", "Watching Movies"],
    CGPA: {
      Year1: 9.89,
      Year2: 9.66,
      Year3: 9.33,
      Year4: 9.29,
    },
  },
  products: [
    {id: 1, name: "Laptop", price: 100000 },
    {id: 2, name: "Mobile", price: 10000 },
    {id: 3, name: "Television", price: 1000000 },
  ]
}


// Below is destructuring
const {
  user: {
    id,
    name,
    age,
    address: { city, country },
    hobbies,
    CGPA: { Year1, Year2, Year3, Year4 }
  },
  products: [
    product1,
    product2,
    product3,
  ]
} = data;

console.log(`Id: ${id}`)
console.log(`Name: ${name}`)
console.log(`Age: ${age}`)
console.log(`Address: ${city} , ${country}`)
console.log(`Hobbies: ${hobbies.join(", ")}`)
console.log(`CGPA: ${Year1}`)
console.log(`CGPA: ${Year2}`)
console.log(`CGPA: ${Year3}`)
console.log(`CGPA: ${Year4}`)
console.log(`Products: ${product1.name} - ${product1.price}`)
console.log(`Products: ${product2.name} - ${product2.price}`)
console.log(`Products: ${product3.name} - ${product3.price}`)