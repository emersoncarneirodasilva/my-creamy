const navbarToggler = document.querySelector(".navbar__top--toggler");
const navbarCollapse = document.querySelector(".navbar__collapse");
const imgs = document.querySelector("#img");
const img = document.querySelectorAll("#img img");

navbarToggler.addEventListener("click", () => {
  navbarToggler.classList.toggle("change");
  navbarCollapse.classList.toggle("show__nav");
});

let idx = 0;

function carrossel() {
  idx++;

  if (idx > img.length - 1) {
    idx = 0;
  };

  imgs.style.transform = `translateX(${-idx * 336}px)`;
};

setInterval (carrossel, 3000);