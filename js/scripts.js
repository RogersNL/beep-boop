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
  //FUNCTION THAT DISPLAYS THE LIST IN HTML
  function displayList(array) {
    for (j = 0; j < array.length; j++) {
      $("#boop").append("<li>" + array[j] + "</li>");
    }
  }

  $("#form-beep").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("input#number").val());
    numberCheck(userInput);
    if (numCheck) {
      numberToArray(userInput);
    } else {
      alert("please enter a number");
    }
    displayList(listNumbers);
  });
});
