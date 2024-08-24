
const $imgplaystation = document.getElementById("imgplaystation");
console.log($imgplaystation);
$imgplaystation.style.filter = "drop-shadow(0px 7px 21px #201f1f)";

const $imgnintendo = document.getElementById("imgnintendo");
console.log($imgnintendo);
$imgnintendo.style.filter = "drop-shadow(0px 7px 21px #201f1f)";

const $imgxbox = document.getElementById("imgxbox");
console.log($imgxbox);
$imgxbox.style.filter = "drop-shadow(0px 7px 21px #201f1f)";


var imagen = document.getElementById("imgplaystation");
var angulo = 0;

imagen.addEventListener("mousemove", function() {
  setInterval(function() {
    angulo = (angulo + 1) % 360;
    imagen.style.transform = "rotateY(" + angulo + "deg)";
  }, 50);
});








 