var form = document.getElementById("form");
form.addEventListener("focus", function( event ) {
  event.target.style.background = "pink";
}, true);
form.addEventListener("blur", function( event ) {
  event.target.style.background = "";
}, true);


function mouseDown() {
  document.getElementById("myP").style.color = "red";
}

function mouseUp() {
  document.getElementById("myP").style.color = "white";
}


function bigImg(x) {
  x.style.height = "500px";
  x.style.width = "500px";
}

function normalImg(x) {
  x.style.height = "400px";
  x.style.width = "400px";
}


function myFunction() {
  var x = document.getElementById("exampleFormControlInput2");
  x.value = x.value.toUpperCase();
}