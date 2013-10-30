
$(document).ready(function(){
var answer = Math.floor((Math.random()*100)+1);
var previousGuess;
function isNormalInteger(str) {
    return (/^[1-9]\d*$/).test(str);
}
function isvalidGuess(guess) {
    return isNormalInteger(guess) && +guess <= 100 && +guess >= 1;
}
function checkGuess (event){
  event.preventDefault();
  //Grab input from text input
  var guess=$("#guess").val();
  alert (answer);
 if(isvalidGuess(guess)){
     guess = parseInt(guess, 10);
   if (previousGuess){
       hot_cold(guess, previousGuess, answer)
   }
   previousGuess=guess;
   if (answer === guess){
    //logic for true
   $("#message-box").append("<p id=right-msg>YOU GOT IT!!!</p>")
   $("#guess").val("").focus();
 } else if (guess > answer){
  //feedback for high guess
$("#message-box").append("<p id=high-msg>Your guess of "+guess+" is too HIGH!</p>")
   $("#guess").val("").focus();
} else {
//feedback for low guess
  $("#message-box").append("<p id=low-msg>Your guess of "+guess+" is too LOW!</p>")
   $("#guess").val("").focus();
       }
  //clear user input text box
  $("#guess").val("").focus();
  //clear error msgs
  $("#error").remove();
}else {
  $("#message-box").append("<p id=error> You must choose a NUMBER between 1 and 100</p>")
   $("#guess").val("").focus();
}
}//end checkGuess
  $("#guess-form").on("click", "#reset",function(event){location.reload();
});
  $("#guess-form").submit(checkGuess);
});




  //Create a function that when called will grab the number from the user input
  //After creating the function and grabbing the users input check to see if it is a number.
    //Ensure it is not a letter, special character, empty, or spaces

  //Check to see if users guess matches random number
  //Check to see if users guess is higher than random number
  //Check to see if users guess is lower than random number


  //Add a event listener to the submit button that calls the function to get users number



function getGuess () {
  //return prompt("Your Guess?");
  return $("#userguess").val();
}




function hot_cold(g , p, a){
   if(Math.abs(g - a) < Math.abs(p - a )){
     $('body').css('background-color', 'red');
     $("#message-box").append("<p id=warm-msg>Warmer!</p>")
   }else{
     $('body').css('background-color', '#BBFFFF');
     $("#message-box").append("<p id=warm-msg>Colder!</p>")
   }
}
