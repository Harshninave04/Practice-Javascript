// let headerF = document.getElementsByClassName("heading");

// headerF.innerHTML = "Harsh S. Ninave";

const div = document.createElement("div");
console.log(div)

div.setAttribute("class", "apnaDiv");
div.setAttribute("id", "apnaId")

div.style.backgroundColor = "green";
div.style.padding = "20px"
div.style.fontSize = "60px"
div.style.fontWeight = "bold"
div.style.border = "12px solid palegreen"
div.style.borderRadius = "10px"
const addText = document.createTextNode("Harsh I love you!!")
div.appendChild(addText)

document.body.appendChild(div)