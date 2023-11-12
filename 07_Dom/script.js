const headerName = document.querySelector(".headName");
headerName.innerHTML = "<em>Harsh Ninave, DevOps Engineer</em>";
// const para = document.querySelector("p").innerHTML;
const para = document.querySelector("p");
para.innerHTML =
  "My name is Harsh Ninave, I live in nagpur and my main area of focus is DevOps and cloud computing. I will be making a good revolution in this field.";
para.style.fontSize = "20px";
console.log(para.textContent);

const a = document.querySelectorAll("a");
console.log(a[0].href); // By using href we can have access to anchor links
console.log(a[1].href);
console.log(a[2].href);

const input = document.querySelector("input");
input.placeholder = "Provide some text over here";
console.log(input.value);
console.log(input.getAttribute("type"));
console.log(input.getAttribute("placeholder")); // getAttribute

//setAttribute("attributeName","value")
input.setAttribute("value", "harshninave58@gmail.com");
input.setAttribute("type", "password");

const ytAnchor = document.getElementsByClassName("youtube");
ytAnchor.href = "https://www.youtube.com/@huxnwebdev";
console.log(ytAnchor.href);