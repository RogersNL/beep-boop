$(document).ready(function(){
//GLOBAL VARIABLES
var numCheck = true;
var listNumbers = [];
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
  function numberToArray(number) {
    for (i = 0; i < number + 1; i++) {
      listNumbers.push(i);
    }
  }

  $("#form-beep").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("input#number").val());
    numberCheck(userInput);
    numberToArray(userInput);
    console.log(listNumbers);
    if (numCheck) {
      $("#boop").append("<li>" + userInput + "</li>");
    }
  });
});
