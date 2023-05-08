// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  //const horn_select = document.getElementById("horn-select");
  //var main_img = document.querySelector("img");
}

const horn_select = document.getElementById("horn-select");
var main_img = document.querySelector("img");
var main_audio = document.querySelector("audio");
var play_button = document.querySelector("button");
var vol_input = document.getElementById("volume");
var vol_img = document.getElementById("volume-controls").getElementsByTagName("img");

horn_select.addEventListener("change", (event) => {
  if (event.target.value == 'party-horn') {
    main_img.src = "assets/images/party-horn.svg";
    main_audio.src = "assets/audio/party-horn.mp3";
  } else if (event.target.value == 'air-horn') {
    main_img.src = "assets/images/air-horn.svg";
    main_audio.src = "assets/audio/air-horn.mp3";
  } else if (event.target.value == 'car-horn') {
    main_img.src = "assets/images/car-horn.svg";
    main_audio.src = "assets/audio/car-horn.mp3";
  }
});

play_button.addEventListener("click", (event) => {
  main_audio.play();
})

vol_input.addEventListener("change", iconChange);

function iconChange() {
  var v = vol_input.value;

  if (v == 0) {
    vol_img.src = "assets/icons/volume-level-0.svg";
  } else if (v >= 1 && v < 33) {
    vol_img.src = "assets/icons/volume-level-1.svg";
  } else if (v >= 33 && v < 67) {
    vol_img.src = "assets/icons/volume-level-2.svg";
  } else {
    vol_img.src = "assets/icons/volume-level-3.svg"
  }
}

