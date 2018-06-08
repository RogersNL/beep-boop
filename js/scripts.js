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
    if (number >= 0) {
      for (i = 0; i <= number; i++) {
        listNumbers.push(i);
      }
    } else {
      for (i = 0; i >= number; i--) {
        listNumbers.push(i);
      }
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
  //FORM SUBMIT
  $("#form-beep").submit(function(event){
    event.preventDefault();
    listNumbers = [];
    filteredNumbers = [];
    var userInput = parseInt($("input#number").val());
    var inputName = $("input#name").val();
    numberCheck(userInput);
    if (numCheck) {
      numberToArray(userInput);
      $("#boop").empty();
    } else {
      showNaN();
    }
    replaceNumbers(listNumbers);
    displayList(filteredNumbers);
  });
//SHOW/HIDE MESSAGE FUNCTIONS
  function showNaN() {
    $(".intro-message").hide();
    $(".NaN-message").fadeIn();
    $(".number-message").hide();
    $(".done-message1").hide();
    $(".done-message2").hide();
    $(".name-message").hide();
    $(".egg-message1").hide();
    $(".egg-message2").hide();
  }
  function showDone1() {
    $(".intro-message").hide();
    $(".NaN-message").hide();
    $(".number-message").hide();
    $(".done-message1").fadeIn();
    $(".done-message2").hide();
    $(".name-message").hide();
    $(".egg-message1").hide();
    $(".egg-message2").hide();
  }
  function showDone2() {
    $(".intro-message").hide();
    $(".NaN-message").hide();
    $(".number-message").hide();
    $(".done-message1").hide();
    $(".done-message2").fadeIn();
    $(".name-message").hide();
    $(".egg-message1").hide();
    $(".egg-message2").hide();
  }
  function showName() {
    $(".intro-message").hide();
    $(".NaN-message").hide();
    $(".number-message").hide();
    $(".done-message1").hide();
    $(".done-message2").hide();
    $(".name-message").fadeIn();
    $(".egg-message1").hide();
    $(".egg-message2").hide();
  }
  function showNumber() {
    $(".intro-message").hide();
    $(".NaN-message").hide();
    $(".number-message").fadeIn();
    $(".done-message1").hide();
    $(".done-message2").hide();
    $(".name-message").hide();
    $(".egg-message1").hide();
    $(".egg-message2").hide();
  }
  function showEgg1() {
    $(".intro-message").hide();
    $(".NaN-message").hide();
    $(".number-message").hide();
    $(".done-message1").hide();
    $(".done-message2").hide();
    $(".name-message").hide();
    $(".egg-message1").fadeIn();
    $(".egg-message2").hide();
  }
  function showEgg2() {
    $(".intro-message").hide();
    $(".NaN-message").hide();
    $(".number-message").hide();
    $(".done-message1").hide();
    $(".done-message2").hide();
    $(".name-message").hide();
    $(".egg-message1").hide();
    $(".egg-message2").fadeIn();
  }
//FORM CLICK MESSAGES
  $(".clickable1").click(function() {
    showName();
  });
  $(".clickable2").click(function() {
    showNumber();
  });
  $(".clickable3").click(function(){
    showEgg1();
  });
  $(".clickable4").click(function(){
    showEgg2();
  });
});
