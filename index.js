var random1 = Math.floor(Math.random() * 6) + 1;
var forImage1 = "images/dice" + random1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", forImage1);

var random2 = Math.floor(Math.random()*6)+1;
var forImage2 = "images/dice"+random2+".png";
document.querySelectorAll("img")[1].setAttribute("src", forImage2);

if(random1>random2){
  document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if(random1 < random2){
  document.querySelector("h1").innerHTML = "Player 2 wins";
}
else{
  document.querySelector("h1").innerHTML = "Equal";
}
