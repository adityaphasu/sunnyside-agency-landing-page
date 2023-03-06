const hamburgerIcon = document.querySelector(".navbar__hamburger");
const navbarList = document.querySelector(".header__list");

hamburgerIcon.addEventListener("click", () => {
  navbarList.classList.toggle("header__list--open");
  hamburgerIcon.classList.toggle("navbar__hamburger--active");
});
