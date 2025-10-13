const small_text = document.querySelector("#small-text");
const med_text = document.querySelector("#med-text");
const large_text = document.querySelector("#large-text");
const clear_pref = document.querySelector("#clear-preferences");
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

small_text.addEventListener("click", () => {change_text_size(0.75)});
med_text.addEventListener("click", () => {change_text_size(1)});
large_text.addEventListener("click", () => {change_text_size(1.5)});
clear_pref.addEventListener("click", () => {clear_local_storage(1)});

window.addEventListener("load", set_text_size)
navToggle.addEventListener("click", toggleMenu);

function set_text_size() {
  if(localStorage.getItem("fontSize") !== null){
    let temp_size = localStorage.getItem("fontSize");
    document.querySelector("html").style.fontSize = String(temp_size) + "px";
  }
}

function change_text_size(size) {
  let temp_size = size * 16;
  document.querySelector("html").style.fontSize = String(temp_size) + "px";
  localStorage.setItem("fontSize", temp_size);
}

function clear_local_storage(size) {
  let temp_size = size * 16;
  document.querySelector("html").style.fontSize = String(temp_size) + "px";
  localStorage.clear();
}

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
