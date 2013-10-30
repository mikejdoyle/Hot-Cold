
$(document).ready(function(){
var answer = Math.floor((Math.random()*100)+1);
var previousGuess;
function isNormalInteger(str) {
    return (/^[1-9]\d*$/).test(str);
}
function validGuess(guess) {
    return isNormalInteger(guess) && +guess <= 100 && +guess >= 1;
}
function checkGuess (event){
  event.preventDefault();
  alert ("check guess called!");
  //Grab input from text input
  var guess=$("#guess").val();
  alert (answer);
 if(validGuess(guess)){
     guess = parseInt(guess, 10);
   if (answer === guess){
       alert ("You got it");
    //logic for true
 } else if (guess > answer){
  alert ("High guess");
  //feedback for low guess
} else {
   alert ("Low guess");
//feedback for high guess
       }
  //clear error msgs
}

}
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



function validateGuess (userGuess) {
  var isNan = isNaN(parseInt(userGuess));
  if (isNan)
  {
    //Set error message in here
    return false;
  }else
  {
    //Ensure between 1-100
    return true;
  }
}

function hotOrCold(g , p, a){
   if(Math.abs(g - a) < Math.abs(p - a )){
     return "warmer"
   }else{
     return "colder"
   }
}
