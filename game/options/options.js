document.addEventListener("DOMContentLoaded", function () {
  hideInitially();
});

let AUDIO_BTN = document.getElementById("audio-btn");
let RESET_BTN = document.getElementById("reset-btn");

/* reset btn's open menu  */
let CONFIRM_RESET_BTN = document.getElementById("reset-confirm-btn");
var waveCounter = localStorage.getItem("waveCounterLocal") || 0;
let resettedWaveCounter = 0;
var wasReset = false;

let audioConfigDiv = document.getElementById("audio-config");
let waveConfigDiv = document.getElementById("wave-config");

let optionsMenu = document.getElementById("options-menu");
let notOptionsMenu = document.getElementById("not-options");
let BACK_BTN = document.getElementById("back-btn");
let HOME_BUTTON = document.getElementById("home-btn");
let OPEN_MENU_BUTTON = document.getElementById("open-menu");

let audioInput = document.getElementById("volumeControl");
let volume = 0;

OPEN_MENU_BUTTON.addEventListener("click", function () {
  console.log("open menu buttons");
  notOptionsMenu.classList.add("hide");
  optionsMenu.classList.remove("hide");
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

let CONFIRM_AUDIO_BUTTON = document.getElementById("volume-confirm-btn");
let audioInputIntervalUpdate;
//<button id="volume-confirm-btn">Confirm</button>

function updateVolume() {
  // Clear any existing interval before starting a new one
  audioInputIntervalUpdate = setInterval(function () {
    volume = audioInput.value;
    console.log(volume);
  }, 500);
}

function resetWave() {
  console.log("resetted the waves localstorage");
  resettedWaveCounter = localStorage.setItem(
    "waveCounterLocal",
    resettedWaveCounter
  );
  wasReset = true;
  console.log(localStorage.getItem("waveCounterLocal"));
}

CONFIRM_AUDIO_BUTTON.addEventListener("click", function () {
  updateVolume();
});

CONFIRM_RESET_BTN.addEventListener("click", function () {
  resetWave();
  CONFIRM_RESET_BTN.textContent = "Done!";
  console.log("wasReset after reset: ", wasReset);
});

HOME_BUTTON.addEventListener("click", function () {
  window.location.href = "/game/game.html";
});

export { volume as soundVolume };
export { wasReset };
