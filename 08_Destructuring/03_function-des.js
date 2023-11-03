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
