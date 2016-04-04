// Cleaner way to write this:

var randomNumber = getRandomNumber(0, 100);
console.log(randomNumber);
var userGuess = 0;
var length = 0;

//Need to add # of guesses: 
var guesses = parseInt(document.getElementById("count").innerHTML);
console.log(guesses);


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
    userGuess = parseInt(document.getElementById("userGuess").value);
    console.log(userGuess);

    if (userGuess == randomNumber) {
        $("#feedback").text("You Got it!");
        appendToList();

    } else if (userGuess <= randomNumber + hotter && userGuess >= randomNumber - hotter) {
        $("#feedback").text("Hot, Hot, Hot!");
        appendToList();
    } else if (userGuess <= randomNumber + hot && userGuess >= randomNumber - hot) {
        $("#feedback").text("Warm. Keep Going");
        appendToList();

    } else if (isNaN(userGuess)) {
        $("#feedback").text("Not a number. Try again!");

    } else {
        $("#feedback").text("Icy cold");
        appendToList();
    }

};

function appendToList() {
    $("#guessList").append("<li>" + userGuess + "</li>");
    length = $("#guessList > li").length
};
