//Another way of declaring an object

const school = new Object();

school.name = "Swaraj public school"
school.student = "Harsh Ninave"
school.standard = 10
console.log(school);

// next another way
const bike = {

    color: "red",
    wheels: 2,
    engine: {
        cylinders: 4,
        size: 4.3
    }

}
// below hasOwnProperty method in object use to check the property
// is present or not 
console.log(bike.hasOwnProperty('color'));

console.log(bike.color)
console.log(bike.engine.size)


// assign in object

const obj1 = { a: "1", b: "2" }
const obj2 = { c: "3", d: "4" }
const obj3 = { e: "5", f: "6" }

const obj4 = Object.assign({}, obj1, obj2, obj3)
console.log(obj4);
// both above and below works same 
const obj5 = { ...obj1, ...obj2, ...obj3 }
console.log(obj5)

