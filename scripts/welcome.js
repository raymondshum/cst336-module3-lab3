$(document).ready(function(){
  fName = localStorage.getItem("fName");
  $("#fName").html(`${fName}`);
});