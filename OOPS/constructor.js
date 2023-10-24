function person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = dob;
}

const person1 = new person("Harsh", "Ninave", "4-11-2004");
const person2 = new person("Reetik", "Bhave", "1-7-2002");
const person3 = new person("Harsh", "Meshram", "19-8-2003");
console.log(person1);
console.log(person2);
console.log(person3);
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.dob);
