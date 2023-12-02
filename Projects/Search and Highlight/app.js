// Get the elements in DOM

const p = document.getElementById("p");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {
  let input = document.getElementById("input").value;

  if (input != "") {
    // Regular expressions, or regex for short, are a sequence of characters that define a search pattern. They can be used to search, edit, or manipulate text and data. Regex is a powerful tool that can be used to solve a variety of problems, from finding specific words or phrases in a text to validating data.
    let regExp = new RegExp(input, "gi");
    p.innerHTML = p.textContent.replace(regExp, "<mark>$&</mark>");
  }
});