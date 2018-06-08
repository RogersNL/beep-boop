$(document).ready(function(){
//GLOBAL VARIABLES
var numCheck = true;
var listNumbers = [];
var filteredNumbers = [];
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
  //FUNCTION THAT CHECKS FOR SPECIAL CONDITIONS AND REPLACES NUMBERS IN ARRAY
  function replaceNumbers(array) {
    for (k = 0; k < array.length; k++)
      if (array[k] % 3 === 0 && k !== 0) {
        filteredNumbers.push("I'm sorry, Dave. I'm afraid I can't do that.");
      } else if (array[k].toString().includes("1")) {
        filteredNumbers.push("Boop!");
      } else if (array[k].toString().includes("0")) {
        filteredNumbers.push("Beep!");
      } else {
        filteredNumbers.push(array[k]);
      }
  }

  $("#form-beep").submit(function(event){
    event.preventDefault();

    listNumbers = [];
    filteredNumbers = [];
    var userInput = parseInt($("input#number").val());
    numberCheck(userInput);
    if (numCheck) {
      numberToArray(userInput);
      $("#boop").empty();
    } else {
      alert("please enter a number");
    }
    replaceNumbers(listNumbers);
    displayList(filteredNumbers);
  });
});
