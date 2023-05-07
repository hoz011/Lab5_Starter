// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  //const horn_select = document.getElementById("horn-select");
  //var main_img = document.querySelector("img");
}

const horn_select = document.getElementById("horn-select");
var main_img = document.querySelector("img");
console.log(horn_select);
console.log(main_img.src);

horn_select.addEventListener("change", (event) => {
  if (event.target.value == 'party-horn') {
    main_img.src = "assets/images/party-horn.svg";
  }
});



