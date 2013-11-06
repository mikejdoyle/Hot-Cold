
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
   if (answer === guess){
    //logic for true
     $("#message-box p:first").before("<p id='right-msg'>YOU GOT IT!!!</p>")
   $("#guess").val("").focus();
 } else if (guess > answer){
  //feedback for high guess
$("#message-box p:first").before("<p id='high-msg'>You guessed "+guess+". </p>")
   $("#guess").val("").focus();
} else {
//feedback for low guess
  $("#message-box p:first").before("<p id='low-msg'>You guessed "+guess+". </p>")
   $("#guess").val("").focus();
       }
   if (previousGuess){
       hot_cold(guess, previousGuess, answer)
   }
   previousGuess=guess;
  //clear user input text box
  $("#guess").val("").focus();
  //clear error msgs
  $("#error").remove();
}else {
  $("#message-box p:first").before("<p id=error> You must choose a NUMBER between 1 and 100</p>")
   $("#guess").val("").focus();
}
}//end checkGuess
  $("#guess-form").on("click", "#reset",function(event){window.location.reload();
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
    if(g == a){
    $('body')
  .animate({backgroundColor: "#49FFA5"}, 500)
  .animate({backgroundColor: "#FFA5A5"}, 500)
  .animate({backgroundColor: "#FF6075"}, 500)
  .animate({backgroundColor: "#BA49FF"}, 500)
  .animate({backgroundColor: "#FF495F"}, 500)
  .animate({backgroundColor: "#FEFF49"}, 500)
  .animate({backgroundColor: "red"}, 500)
  .animate({backgroundColor: "#FFED3D"}, 500);
    }
    else if(Math.abs(g - a) < Math.abs(p - a )){
     $('body').css('background-color', 'red');
     $("#message-box p:first").append("You're getting HOTTER!")
   }else{
     $('body').css('background-color', '#D2FFFF');
     $("#message-box p:first").append("You're getting COLDER!")
   }

}
