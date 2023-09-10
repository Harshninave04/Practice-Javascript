// for in

// Object
const language = {
    js: "javascript",
    py: "python",
    cpp: "c++",
    java: "java language for android"
}

for (const key in language) {
    console.log(`${key} shortcut is for ${language[key]}`)
}

var resume = {
    about: "Harsh Ninave",
    education: "Btech",
    salary: "2341234",
    city: "diamond Nagar"
}

for (const key in resume) {
    console.log(`The ${key} is ${resume[key]}`)
}