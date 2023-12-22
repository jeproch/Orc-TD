document.addEventListener("DOMContentLoaded", function () {
  console.log("content loaded");

  hideInitially();
});

let AUDIO_BTN = document.getElementById("audio-btn");
let RESET_BTN = document.getElementById("reset-btn");

let audioConfigDiv = document.getElementById("audio-config");
let waveConfigDiv = document.getElementById("wave-config");

let optionsMenu = document.getElementById("options-menu");
let notOptionsMenu = document.getElementById("not-options");
let BACK_BTN = document.getElementById("back-btn"); //<button id="back-btn" id="back-btn">Back</button>

let HOME_BUTTON = document.getElementById("home-btn");
let OPEN_MENU_BUTTON = document.getElementById("open-menu");

let audioInput = document.getElementById("volumeControl");

OPEN_MENU_BUTTON.addEventListener("click", function () {
  console.log("open menu buttons");
  notOptionsMenu.classList.add("hide");
  optionsMenu.classList.remove("hide");
});

HOME_BUTTON.addEventListener("click", function () {
  window.location.href = "/game/game.html";
});

BACK_BTN.addEventListener("click", function () {
  notOptionsMenu.classList.remove("hide");
  optionsMenu.classList.add("hide");
});

AUDIO_BTN.addEventListener("click", function () {
  console.log("audio button");
  audioConfigDiv.classList.remove("hide");
  waveConfigDiv.classList.add("hide");
});

RESET_BTN.addEventListener("click", function () {
  console.log("reset button");
  waveConfigDiv.classList.remove("hide");
  audioConfigDiv.classList.add("hide");
});

function hideInitially() {
  audioConfigDiv.classList.add("hide");
  waveConfigDiv.classList.add("hide");
  optionsMenu.classList.add("hide");
}
