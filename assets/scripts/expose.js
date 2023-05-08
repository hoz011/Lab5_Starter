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
console.log(horn_select);
console.log(main_img.src);

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





