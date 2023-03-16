{
    function toggleSearch() {
      var searchForm = document.querySelector(".search-form");
      searchForm.classList.toggle("active");
    }
  }
  const cardContainer = document.querySelector(".card-container");
const cards = document.querySelectorAll(".card");

let isDown = false;
let startX;
let scrollLeft;

cardContainer.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - cardContainer.offsetLeft;
  scrollLeft = cardContainer.scrollLeft;
});

cardContainer.addEventListener("mouseleave", () => {
  isDown = false;
});

cardContainer.addEventListener("mouseup", () => {
  isDown = false;
});

cardContainer.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - cardContainer.offsetLeft;
  const walk = (x - startX) * 3; // Change the multiplier to adjust the speed
  cardContainer.scrollLeft = scrollLeft - walk;
});
const form = document.querySelector('#search-form');
const input = form.querySelector('input');
const button = form.querySelector('button');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const searchTerm = input.value.trim();
  if (searchTerm !== '') {
    // Do something with the search term
    console.log(`You searched for: ${searchTerm}`);
  }
});

button.addEventListener('click', () => {
  form.submit();
});

input.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    form.submit();
  }
});
