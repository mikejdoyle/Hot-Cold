$(document).ready(function () {
    var answer = Math.floor((Math.random() * 100) + 1);
    var previousGuess = 0;

    function isNormalInteger(str) {
        return (/^[1-9]\d*$/).test(str);
    }

    function isvalidGuess(guess) {
        return isNormalInteger(guess) && +guess <= 100 && +guess >= 1;
    }

    function checkGuess(event) {
        event.preventDefault();
        //Grab input from text input
        var guess = $("#guess").val();
        //alert (answer);
        if (isvalidGuess(guess)) {
            guess = parseInt(guess, 10);
            if (answer === guess) {
                //logic for true
                $("#message-box p:first").before("<p class='right-msg'>YOU GOT IT!!!</p>")
                $("#guess").val("").focus();
            } else if (guess > answer) {
                //feedback for high guess
                $("#message-box p:first").before("<p class='high-msg'>You guessed " + guess + ". </p>")
                $("#guess").val("").focus();
            } else {
                //feedback for low guess
                $("#message-box p:first").before("<p class='low-msg'>You guessed " + guess + ". </p>")
                $("#guess").val("").focus();
            }
            hot_cold(guess, previousGuess, answer)

            previousGuess = guess;
            //clear user input text box
            $("#guess").val("").focus();
            //clear error msgs
            $("#error").remove();
        } else {
            $("#message-box p:first").before("<p class='error'> You must choose a NUMBER between 1 and 100</p>")
            $("#guess").val("").focus();

        }
    } //end checkGuess
    $("#guess-form").on("click", "#reset", function (event) {
        answer = Math.floor((Math.random() * 100) + 1);
        previousGuess = 0;
        $('body')
            .animate({
                backgroundColor: "gray"
            }, 500);

        $("#message-box").html("<p></p>");
    });
    $("#guess-form").submit(checkGuess);
});

function getGuess() {
    //return prompt("Your Guess?");
    return $("#userguess").val();
}

function hot_cold(g, p, a) {
    if (g == a) {
        $('body')
            .animate({
                backgroundColor: "#49FFA5"
            }, 500)
            .animate({
                backgroundColor: "#FFA5A5"
            }, 500)
            .animate({
                backgroundColor: "#FF6075"
            }, 500)
            .animate({
                backgroundColor: "#BA49FF"
            }, 500)
            .animate({
                backgroundColor: "#FF495F"
            }, 500)
            .animate({
                backgroundColor: "#FEFF49"
            }, 500)
            .animate({
                backgroundColor: "red"
            }, 500)
            .animate({
                backgroundColor: "#FFED3D"
            }, 500);
    } else if (p == 0) {
        if (g < a)
            $("#message-box p:first").append("Your first guess is a little LOW!")
        else(
            $("#message-box p:first").append("Your first guess is a little HIGH!")
        )
    } else if (Math.abs(g - a) < Math.abs(p - a)) {
        $('body').css('background-color', 'red');
        $("#message-box p:first").append("You're getting HOTTER!")
    } else {
        $('body').css('background-color', '#D2FFFF');
        $("#message-box p:first").append("You're getting COLDER!")
    }

}
