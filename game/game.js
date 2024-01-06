let START_BTN = document.getElementById("start-btn");
const bodyEl = document.getElementById("body");
const MENU_BTN = document.getElementById("menu-btn");
const gameMenu = document.getElementById("game");
const menuMenu = document.getElementById("menu");
const MENU_BACK_BTN = document.getElementById("menu-back-btn");
const MENU_HOME_BTN = document.getElementById("menu-home-btn");
const MENU_DISCORD_BTN = document.getElementById("menu-discord-btn");
const startedGame = document.getElementById("started");
const notStarted = document.getElementById("not-started");
const SOCIALS_BTN = document.getElementById("socials-btn");
const mainMenu = document.getElementById("main-menu");
const OPTIONS_BTN = document.getElementById("options-btn");
const BLOG_BTN = document.getElementById("blog-btn");
let upgradesPage = document.getElementById("upgrades-menu");

document.addEventListener("DOMContentLoaded", function () {
  mainMenu.classList.remove("hide");

  gameMenu.classList.add("hide");
  bodyEl.classList.remove("black-background");

  upgradesPage.classList.add("hide");

  menuMenu.classList.add("hide");
  // Check if the alert has been shown before
  if (!localStorage.getItem("alertShown")) {
    // Show the alert
    alert("Press F11 for Full Screen for the best experience");

    // Set a flag in localStorage to indicate that the alert has been shown
    localStorage.setItem("alertShown", "true");
  }
});

START_BTN.addEventListener("click", function () {
  const mainMenu = document.getElementById("main-menu");
  mainMenu.classList.add("hide");

  const gameMenu = document.getElementById("game");
  gameMenu.classList.remove("hide");

  menuMenu.classList.add("hide");

  // Set the body background image to the image in the .game container
  document.body.style.backgroundImage = `url('${
    gameMenu.querySelector(".background-image").src
  }')`;
});

MENU_BTN.addEventListener("click", function () {
  gameMenu.classList.add("hide");
  menuMenu.classList.remove("hide");
});

MENU_BACK_BTN.addEventListener("click", function () {
  gameMenu.classList.remove("hide");
  menuMenu.classList.add("hide");
});

MENU_HOME_BTN.addEventListener("click", function () {
  mainMenu.classList.remove("hide");
  gameMenu.classList.add("hide");
  menuMenu.classList.add("hide");
});

MENU_DISCORD_BTN.addEventListener("click", function () {
  window.location.href = "https://discord.gg/Wbzx8QVkCd";
});

SOCIALS_BTN.addEventListener("click", function () {
  window.location.href = "/game/socials/socials.html";
});

OPTIONS_BTN.addEventListener("click", function () {
  window.location.href = "/game/options/options.html";
});

BLOG_BTN.addEventListener("click", function () {
  window.location.href = "/game/blog/blog.html";
});
