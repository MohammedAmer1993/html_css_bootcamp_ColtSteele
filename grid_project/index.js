const burgerBtn = document.getElementById("btn");
const friLine = document.querySelector(".first-line");
const secLine = document.querySelector(".second-line");
const thiLine = document.querySelector(".third-line");
const icons = document.querySelector(".icons");

btn.addEventListener("click", () => {
  friLine.classList.toggle("first-line-animate");
  secLine.classList.toggle("second-line-animate");
  thiLine.classList.toggle("third-line-animate");
  icons.classList.toggle("show-icons");
});
