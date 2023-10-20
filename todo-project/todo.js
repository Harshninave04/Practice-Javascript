// let element = document.createElement("li");
// element.innerHTML = "Item 2";
// document.body.appendChild(element);
// element.style.fontSize = "30px";
// element.style.listStyle = "none";

// let lielement = document.querySelector(".items");
// lielement.append(element);

// element = document.createElement("li");
// element.innerHTML = "Item 3";
// document.body.appendChild(element);

// element = document.createElement("li");
// element.innerHTML = "Item 4";
// document.body.appendChild(element);

// var button = document.createElement("button");
// button.innerText = "Click me!";
// document.body.appendChild(button);
// button.style.background = "yellow";
// button.style.padding = "10px";

// let itemcount = 1;
// const btn = document.querySelector(".mytextbtn");
// btn.addEventListener("click", () => {
//   element = document.createElement("li");
//   element.innerHTML = "Item " + itemcount++;
//   document.body.appendChild(element);
//   element.style.fontSize = "30px";
// });

document.querySelector("title").textContent = "Apna TODO list";

const btn = document.querySelector(".mytextbtn");
btn.addEventListener("click", () => {
  var inputvalue = document.querySelector(".mytext").value;
  document.querySelector(".outputValue").innerHTML += inputvalue + "<br>";
});

const remBtn = document.querySelector(".myremovebtn");
remBtn.addEventListener("click", () => {
  var remElement = document.querySelector(".outputValue");
  remElement.lastChild.remove();
});