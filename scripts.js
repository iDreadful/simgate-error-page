const action = window.document.querySelector('.astronaut-action');

const astronaut = window.document.querySelector('.astronaut');
const astronautBox = window.document.querySelector('.astronaut-box');
const stars = window.document.querySelector('.stars');


action.addEventListener("click", () => {
  astronaut.classList.toggle("action");
  astronautBox.classList.toggle("action");
  stars.classList.toggle("action");
})