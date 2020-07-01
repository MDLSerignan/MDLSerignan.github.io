

function TransformToDark(){
  var MainBody = document.getElementById("body");
  var Links = document.getElementsByTagName('a');
  //We now transform their background and their color
  MainBody.style.background = "#323232";
  MainBody.style.color = "#ffffff";
}
function TransformToLight(){
  var MainBody = document.getElementById("body");
  var Links = document.getElementsByTagName('A');
  //We now transform their background and their color
  MainBody.style.background = "#ffffff";
  MainBody.style.color = "#000000";
  Links.style.color = "#000000"
}
