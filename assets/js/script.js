
const $imgplaystation = document.getElementById("imgplaystation");
console.log($imgplaystation);
$imgplaystation.style.filter = "drop-shadow(0px 7px 21px #201f1f)";

const $imgnintendo = document.getElementById("imgnintendo");
console.log($imgnintendo);
$imgnintendo.style.filter = "drop-shadow(0px 7px 21px #201f1f)";

const $imgxbox = document.getElementById("imgxbox");
console.log($imgxbox);
$imgxbox.style.filter = "drop-shadow(0px 7px 21px #201f1f)";


var imagen1 = document.getElementById("imgplaystation");
var imagen2 = document.getElementById("imgnintendo");
var imagen3 = document.getElementById("imgxbox");

var angulo1 = 0;
var angulo2 = 0;
var angulo3 = 0;

var girando1 = false;
var girando2 = false;
var girando3 = false;

imgplaystation.addEventListener("mousemove", function() {
  if (!girando1) {
    girando1 = true;
    setInterval(function() {
      angulo1 = (angulo1 + 1) % 360;
      imagen1.style.transform = "rotateY(" + angulo1 + "deg)";
    }, 10);
  }
});

imgplaystation.addEventListener("mouseleave", function() {
  girando1 = false;
  clearInterval();
});

imgnintendo.addEventListener("mousemove", function() {
  if (!girando2) {
    girando2 = true;
    setInterval(function() {
      angulo2 = (angulo2 + 1) % 360;
      imagen2.style.transform = "rotateY(" + angulo2 + "deg)";
    }, 10);
  }
});

imgnintendo.addEventListener("mouseleave", function() {
  girando2 = false;
  clearInterval();
});

imgxbox.addEventListener("mousemove", function() {
  if (!girando3) {
    girando3 = true;
    setInterval(function() {
      angulo3 = (angulo3 + 1) % 360;
      imagen3.style.transform = "rotateY(" + angulo3 + "deg)";
    }, 10);
  }
});

imgxbox.addEventListener("mouseleave", function() {
  girando3 = false;
  clearInterval();
});




 