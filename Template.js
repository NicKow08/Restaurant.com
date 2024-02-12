
function showdiv(){
  var div = document.getElementById("menu-toggle-page");
  div.style.transition = "all 1s ease";
  div.style.visibility = "visible";
  div.style.transform = "translateY(0px)";
}
function hidediv(){
  var div = document.getElementById("menu-toggle-page");
  div.style.transition = "all 1s ease";
  div.style.visibility = "hidden";
  div.style.transform = "translateY(calc(5*10vh*-1))";
}