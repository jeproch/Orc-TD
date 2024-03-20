let MENU_BTN = document.getElementById("menu-btn");
let blogPage = document.getElementById("blog-page");
let menuPage = document.getElementById("menu-page");
const MM_BUTTON = document.getElementById("mm-btn");
const BACK_BUTTON = document.getElementById("back-btn");

document.addEventListener("DOMContentLoaded", function () {
  menuPage.classList.add("hide");
  blogPage.classList.remove("hide");
});

MENU_BTN.addEventListener("click", function () {
  //reveals div adding functionality to the page
  //go back or go to menu

  menuPage.classList.remove("hide");
  blogPage.classList.add("hide");
});

BACK_BUTTON.addEventListener("click", function () {
  menuPage.classList.add("hide");
  blogPage.classList.remove("hide");
});

MM_BUTTON.addEventListener("click", function () {
  window.location.href = "/game/game.html";
});
