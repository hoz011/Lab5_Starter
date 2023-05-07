// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  //const horn_select = document.getElementById("horn-select");
  //var main_img = document.querySelector("img");
}

const horn_select = document.getElementById("horn-select");
var main_img = document.querySelector("img");

horn_select.addEventListener("change", (event) => {
  if (EventTarget.value == 'party-horn') {
    main_img.src = "assets/images/party-horn.svg";
  }
});



