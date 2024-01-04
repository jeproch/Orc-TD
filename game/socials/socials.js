let bodyEl = document.getElementById("body-el");

bodyEl.style.transition = "background-color 0.3s ease-in-out";

const YOUTUBE_BTN = document.getElementById("youtube-btn");
const DISCORD_BUTTON = document.getElementById("discord-btn");
const HOME_BUTTON = document.getElementById("home-button");

YOUTUBE_BTN.addEventListener("mouseover", () => {
  bodyEl.style.backgroundColor = "#FF474C";
  YOUTUBE_BTN.style.backgroundColor = "Red";
  DISCORD_BUTTON.style.backgroundColor = "Black";
  HOME_BUTTON.style.backgroundColor = "Black";
});

YOUTUBE_BTN.addEventListener("mouseout", () => {
  bodyEl.style.backgroundColor = "Yellow";
  YOUTUBE_BTN.style.backgroundColor = "Yellow";
  DISCORD_BUTTON.style.backgroundColor = "Yellow";
  HOME_BUTTON.style.backgroundColor = "Yellow";
});

DISCORD_BUTTON.addEventListener("mouseover", () => {
  bodyEl.style.backgroundColor = "#87CEEB";
  DISCORD_BUTTON.style.backgroundColor = "Lightblue";
  YOUTUBE_BTN.style.backgroundColor = "Black";
  HOME_BUTTON.style.backgroundColor = "Black";
});

DISCORD_BUTTON.addEventListener("mouseout", () => {
  bodyEl.style.backgroundColor = "Yellow";
  DISCORD_BUTTON.style.backgroundColor = "yellow";
  YOUTUBE_BTN.style.backgroundColor = "Yellow";
  HOME_BUTTON.style.backgroundColor = "Yellow";
});

HOME_BUTTON.addEventListener("mouseover", () => {
  bodyEl.style.backgroundColor = "yellow";
  DISCORD_BUTTON.style.backgroundColor = "yellow";
  YOUTUBE_BTN.style.backgroundColor = "Yellow";
  HOME_BUTTON.style.backgroundColor = "black";
  HOME_BUTTON.style.color = "yellow";
});

HOME_BUTTON.addEventListener("mouseout", () => {
  HOME_BUTTON.style.backgroundColor = "yellow";
  HOME_BUTTON.style.color = "black";
});

//add a black background whilst hovering a social to the other buttons

DISCORD_BUTTON.addEventListener("click", function () {
  window.location.href = "https://discord.gg/Wbzx8QVkCd";
});

HOME_BUTTON.addEventListener("click", function () {
  window.location.href = "/game/game.html";
});
