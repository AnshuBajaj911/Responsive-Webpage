function myFunction() {

var p2 = document.getElementById("pp");

var p = document.getElementById("op");
  if (p.style.display === "none") {
    p.style.display = "block";
    pp.style.display="none";
   
  } else {
    p.style.display = "none";
     pp.style.display="block";
  }

  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
