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
  if (window.scrollY > 100) {
    sticky.style.display = "block";
  } else {
    sticky.style.display = "none";
  }
});

function scrollToQuery(query, offset) {
  const e = document.querySelector(query);
  const top = e.offsetTop + offset;
  window.scrollTo({ top: top, behavior: "smooth" });
}
scrollToQuery("#top", -125);

for (let anchor of anchors) {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    let blockID = anchor.getAttribute("href");
    scrollToQuery(blockID, -125);
  });
}

// function plusMinus() {
//   let plusButton = document.querySelector(".plus-minus_active");
//   plusButton.addEventListener("click", function () {
//     plusButton.classList.toggle("plus-minus_new");
//   });
// }
// plusMinus();

// function plusMinus2() {
//   let plusButton2 = document.querySelector(".plus-minus2");
//   plusButton2.addEventListener("click", function () {
//     plusButton2.classList.toggle("plus-minus2_active");
//   });
// }
// plusMinus2();

// function plusMinus3() {
//   let plusButton3 = document.querySelector(".plus-minus3");
//   plusButton3.addEventListener("click", function () {
//     plusButton3.classList.toggle("plus-minus3_active");
//   });
// }
// plusMinus3();

function plusMinus1() {
  let block = document.querySelector(".answers__details1");
  let plus = document.querySelector(".plus1");
  block.addEventListener("click", function () {
    plus.classList.toggle("plus1_new");
  });
}
plusMinus1();

function plusMinus2() {
  let block = document.querySelector(".answers__details2");
  let plus = document.querySelector(".plus2");
  block.addEventListener("click", function () {
    plus.classList.toggle("plus2_active");
  });
}
plusMinus2();
function plusMinus3() {
  let block = document.querySelector(".answers__details3");
  let plus = document.querySelector(".plus3");
  block.addEventListener("click", function () {
    plus.classList.toggle("plus3_active");
  });
}
plusMinus3();
