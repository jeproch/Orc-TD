//<button id="start-btn">Start</button>

let START_BUTTON = document.getElementById("start-btn");
let OPTIONS_BUTTON = document.getElementById("options-btn");
let BLOG_BUTTON = document.getElementById("blog-btn");
let SOCIALS_BUTTON = document.getElementById("socials-btn");
let Move_ORC_BTN = document.getElementById("move-orc-btn");
let HELP_BUTTON = document.getElementById("menu-help-btn");
let DISCORD_BUTTON = document.getElementById("menu-discord-btn");
let HOME_BUTTON = document.getElementById("menu-home-btn");
let BACK_BUTTON = document.getElementById("menu-back-btn");

let clickSound = new Audio(
  "../game/assets/audio/31788__lervis__1200-startstop-button-04.wav"
); //`url("../game/assets/Orcs/Orc 1 - Dead.png")`

clickSound.volume = window.volume / 100 || 0.5;
clickSound.playbackRate = 2; //these are default values

const buttons = [
  START_BUTTON,
  OPTIONS_BUTTON,
  BLOG_BUTTON,
  SOCIALS_BUTTON,
  HELP_BUTTON,
  DISCORD_BUTTON,
  HOME_BUTTON,
  BACK_BUTTON,
  Move_ORC_BTN,
];

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    clickSound.play();
  });
});

START_BUTTON.addEventListener("click", function () {
  console.log(window.volume);
});
