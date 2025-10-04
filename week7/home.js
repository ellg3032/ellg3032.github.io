const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

function toggleMenu() {
  var shown = navMenu.classList.toggle("show");
  navMenu.classList.toggle("hide");

  if (shown) {
    navToggle.setAttribute("aria-expanded", "true");
    navToggle.style.transform = "rotate(180deg)";
  } else {
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.style.transform = "rotate(0deg)";
  }
}