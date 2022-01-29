function test(a, b) {
    return a + b
}

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

// $(".reviews-slider").slick();

//# sourceMappingURL=script.js.map
