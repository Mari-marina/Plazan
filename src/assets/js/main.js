//навигация, меню
const button = document.querySelector(".burger");
let menu = document.querySelector(".nav");

button.addEventListener("click", function () {
  menu.classList.toggle("active");
});

const overlay = document.querySelector(".nav__list");
overlay.addEventListener("click", function () {
  menu.classList.toggle("active");
});

function burgerMenu() {
  let burgerButton = document.querySelector(".burger");
  burgerButton.addEventListener("click", function () {
    burgerButton.classList.toggle("burger_active");
  });
}
burgerMenu();

let anchors = document.querySelectorAll('a[href*="#"]');
// let anchors = document.querySelectorAll(".go_top");
for (let anchor of anchors) {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    let blockID = anchor.getAttribute("href");
    document.querySelector(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

const goTop = document.querySelector(".go_top");
window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    goTop.style.opacity = 1;
  } else {
    goTop.style.opacity = 0;
  }
});

const sticky = document.querySelector(".sticky");
window.addEventListener("scroll", function () {
  if (window.scrollY < 50) {
    sticky.style.opacity = 0;
  } else {
    sticky.style.opacity = 1;
  }
});
