document.addEventListener("DOMContentLoaded", function () {
  hideInitially();
});

let AUDIO_BTN = document.getElementById("audio-btn");
let RESET_BTN = document.getElementById("reset-btn");

let runAudioInt;

/* reset btn's open menu  */
let CONFIRM_RESET_BTN = document.getElementById("reset-confirm-btn");

let audioConfigDiv = document.getElementById("audio-config");
let waveConfigDiv = document.getElementById("wave-config");

let optionsMenu = document.getElementById("options-menu");
let notOptionsMenu = document.getElementById("not-options");
let BACK_BTN = document.getElementById("back-btn");
let HOME_BUTTON = document.getElementById("home-btn");
let OPEN_MENU_BUTTON = document.getElementById("open-menu");

let audioInput = document.getElementById("volumeControl");

OPEN_MENU_BUTTON.addEventListener("click", function () {
  notOptionsMenu.classList.add("hide");
  optionsMenu.classList.remove("hide");
});

BACK_BTN.addEventListener("click", function () {
  notOptionsMenu.classList.remove("hide");
  optionsMenu.classList.add("hide");
});

RESET_BTN.addEventListener("click", function () {
  waveConfigDiv.classList.remove("hide");
  audioConfigDiv.classList.add("hide");
});

HOME_BUTTON.addEventListener("click", function () {
  window.location.href = "/game/game.html";
});

function hideInitially() {
  audioConfigDiv.classList.add("hide");
  waveConfigDiv.classList.add("hide");
  optionsMenu.classList.add("hide");
}

//waves

CONFIRM_RESET_BTN.addEventListener("click", () => {
  rewriteLocalStorage();
  waveConfigDiv.classList.add("hide");
});

//write a function that exports if something was reset to the main game
function rewriteLocalStorage() {
  let reference = 0;
  let localReference = localStorage.setItem("waveCounterLocal", reference);
}

//audio
let CONFIRM_AUDIO_BUTTON = document.getElementById("volume-confirm-btn");
//<button id="volume-confirm-btn">Confirm</button>

let clickVolume;

AUDIO_BTN.addEventListener("click", function () {
  clickVolume = localStorage.getItem("localSoundVolume") || 0.5;
  audioConfigDiv.classList.remove("hide");
  waveConfigDiv.classList.add("hide");
  runAudioInt = setInterval(function () {
    clickVolume = audioInput.value / 100;
  }, 500);
});

CONFIRM_AUDIO_BUTTON.addEventListener("click", function () {
  clickVolume = Number(clickVolume.toFixed(1));
  localStorage.setItem("localSoundVolume", clickVolume);

  clearInterval(runAudioInt);
  audioConfigDiv.classList.add("hide");
});
