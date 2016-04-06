// Cleaner way to write this:

var randomNumber = getRandomNumber(0, 100);
console.log(randomNumber);
var userGuess = 0;
var length = 0;

$(document).ready(function() {


    /*--- Display information modal box ---*/
    $(".what").click(function() {
        $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function() {
        $(".overlay").fadeOut(1000);

    });


    $("#guessButton").click(function(e) {
        e.preventDefault();
        guessGame(5, 10);
        $("#count").text(length);
        $("#userGuess").val("")

    });

    $(".new").click(function() {
        getRandomNumber(0, 100);
        console.log(randomNumber);
        $("#userGuess").val("");
        $("#guessList li").remove();
        guessGame(5, 10);
        $("#feedback").text("Make Your Guess!");
        $("#count").text("0");

    });

});

function getRandomNumber(min, max) {
    return randomNumber = Math.floor(Math.random() * (max - min) + min);
}


function guessGame(hotter, hot) {
    userGuess = parseInt($("#userGuess").val());
    console.log(userGuess);

    if (userGuess == randomNumber) {
        $("#feedback").text("You Got it!");

    } else if (userGuess <= randomNumber + hotter && userGuess >= randomNumber - hotter) {
        $("#feedback").text("Hot, Hot, Hot!");

    } else if (userGuess <= randomNumber + hot && userGuess >= randomNumber - hot) {
        $("#feedback").text("Warm. Keep Going");

    } else if (isNaN(userGuess)) {
        $("#feedback").text("Not a number. Try again!");
        return;

    } else {
        $("#feedback").text("Icy cold");
    }

    appendToList();
};

function appendToList() {
    $("#guessList").append("<li>" + userGuess + "</li>");
    length = $("#guessList > li").length
};
