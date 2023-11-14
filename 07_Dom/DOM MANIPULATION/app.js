// createElement()
// appendChild()
// append()
// prepend()
// insertBefore()

// removeChild()
// remove()

// Creating Element ->

const h1 = document.createElement("h1");
h1.textContent = "Good Byee!!";
h1.classList.add("greeting");
console.log(h1);

// Append Child ->

const body = document.body;
body.appendChild(h1);

const ul = document.querySelector("ul");

const newLi = document.createElement("li");
newLi.innerText = "I'm new li";
ul.appendChild(newLi);

const firstLi = document.querySelector("li");
// insertBefore(what,where); It'll insert the text on top of the firstLi
ul.insertBefore(newLi, firstLi);
