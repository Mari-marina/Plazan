//навигация, меню
const button = document.querySelector(".burger");
const menu = document.querySelector(".nav");

button.addEventListener("click", function () {
  menu.classList.toggle("active");
});

function burgerMenu() {
  let burgerButton = document.querySelector(".burger");
  burgerButton.addEventListener("click", function () {
    burgerButton.classList.toggle("burger_active");
  });
}
burgerMenu();

// // let anchors = document.querySelectorAll('a[href*="#"]');
// let anchors = document.querySelectorAll(".go_top");
// for (let anchor of anchor) {
//   anchor.addEventListener("click", function (event) {
//     event.preventDefault();
//     let blockID = anchor.getAttribute("href");
//     document.querySelector(blockID).scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });
//   });
// }

// const goTop = document.querySelector(".go_top");
// window.addEventListener("scroll", function () {
//   if (window.scrollY > 0) {
//     goTop.style.display = "block";
//   } else {
//     goTop.style.display = "none";
//   }
// });
