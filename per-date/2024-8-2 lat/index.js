let clicked = null;
const submit = document.getElementById("submit");
const mainView = document.getElementById("main");
const hidden = document.getElementById("hidden");
const back = document.getElementById("back");
const audioplay = document.getElementById("audio");

function clickButton() {
  mainView.classList.add("hide-main");
  hidden.classList.remove("hidden");
  audioplay.setAttribute("autoplay", "");
  audioplay.play();
  audioplay.audio = 100;
}

function backButton() {
  hidden.classList.add("hidden");
  mainView.classList.remove("hide-main");
}

submit.addEventListener("click", clickButton);
back.addEventListener("click", backButton);
