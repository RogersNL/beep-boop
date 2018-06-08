$(document).ready(function(){
//GLOBAL VARIABLES
var numCheck = true;

//FUNCTIONS
  //FUNCTION THAT FILTERS NaN
  function numberCheck(number) {
    if (isNaN(number)) {
    numCheck = false;
    } else {
    numCheck = true;
    }
  }
  //FUNCTION THAT PUSHES 0 TO ENTERED NUMBER IN AN ARRAY
  function 

  $("#form-beep").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("input#number").val());
    console.log(userInput);
    numberCheck(userInput);
    if (numCheck) {
      $("#boop").append("<li>" + userInput + "</li>");
    }
  });
});
