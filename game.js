$(document).ready(function() {
  //Create a variable to store a random number
  var Answer = Math.floor((Math.random()*100)+1);
  var Guess = getGuess();
   var vGuess = validateGuess (Guess);
  checkGuess (Guess, Answer);

  //Create a function that when called will grab the number from the user input
  //After creating the function and grabbing the users input check to see if it is a number. 
    //Ensure it is not a letter, special character, empty, or spaces
  
  //Check to see if users guess matches random number
  //Check to see if users guess is higher than random number
  //Check to see if users guess is lower than random number
  
  
  //Add a event listener to the submit button that calls the function to get users number
  
  
});

function getGuess () {
	return prompt("Your Guess?");

}

function checkGuess (number, target) {
	if (number == target) {
		alert ("You Got It!!");
	}else if (number < target) {
		alert ("Too Low!");
	} else {
		alert ("Too High!");
}
}
function validateGuess (userGuess) {
	var isNan = isNaN(parseInt(userGuess));
if (isNan)
	{ alert (isNan)
	  return prompt ("You must use a Number");
	}else 
  {
		return userGuess;
  }
}

