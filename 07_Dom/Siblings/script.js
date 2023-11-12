// this section is all about exploring the concept of Parent Element by using parentElement

const firstLi = document.querySelector("li");
console.log(firstLi);
console.log(firstLi.parentElement);

const section = document.querySelector("h1");
console.log(section);
console.log(section.parentElement);
console.log(section.parentElement.parentElement);

const button = document.querySelector("button");
console.log(button);
console.log(button.parentElement);

// Now how to access the childrens ??
// This is all about getting children !
const ul = document.querySelector("ul");
console.log(ul);
console.log(ul.children);
console.log((ul.children[0].innerText = "one")); // We can do this as well
console.log(ul.children[1].getAttribute("class"));
console.log(ul.children[2]);
console.log(ul.children[3].getAttribute("class"));

// Now let's learn about Siblings !
// It's about how to take next sibling
console.log(firstLi.nextElementSibling.innerText)
console.log(firstLi.nextElementSibling.nextElementSibling.innerText)

// It's about how to get previous sibling
const fourth = document.querySelector(".fourth");
console.log("+++++++++++++++Previous Element Selector++++++++++++++++++++++++")
console.log(fourth.previousElementSibling.innerText)
console.log(fourth.previousElementSibling.previousElementSibling.innerText)
console.log(fourth.previousElementSibling.previousElementSibling.previousElementSibling.innerText)