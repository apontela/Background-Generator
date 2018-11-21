var _ = require("lodash");

console.log(_);

var array = [1,2,3,4,5,6,7,8,9,0];

console.log(_.without(array, 3));

var h6 = document.querySelector("h6");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var jumbotron = document.querySelector(".jumbotron");
var select = document.querySelector("select");

function gradientToJumbotron() {
    jumbotron.style.backgroundImage = 'linear-gradient(' + select.value + ',' + color1.value + ',' + color2.value + ')';
    h6.textContent = jumbotron.style.backgroundImage; 
};

color1.addEventListener("input", gradientToJumbotron);
color2.addEventListener("input", gradientToJumbotron);
select.addEventListener("input", gradientToJumbotron)
