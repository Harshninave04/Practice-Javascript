// Getting elements from the DOM

const rating = document.querySelectorAll(".rating");
const ratingContainer = document.querySelector(".ratings-container");
const panel = document.querySelector("#panel");
const sendBtn = document.querySelector("#send");

// Adding Events

let selectedRating = "Satisfied";

ratingContainer.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("rating")) {
    // console.log(e.target.parentNode.classList.contains("rating"));

    // removeActive();
    e.target.parentNode.classList.add("active");
    selectedRating = e.target.nextElementSibling.innerHTML;
  }
});

sendBtn.addEventListener("click", () => {
  panel.innerHTML = `
        <p class="heart">💖</p>
        <strong>Thank you!!</strong>
        <br>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
    `;
});

// function removeActive() {
//   for (let i = 0; i < rating.length; i++) {
//     rating[i].classList.remove("active");
//   }
// }
