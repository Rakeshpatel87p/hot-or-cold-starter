

// Cleaner way to write this:
var randomNumber=0;
getRandomNumber(0, 100);
console.log(randomNumber);

$(document).ready(function(){


	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});


  	$("#guessButton").click(function(e){
  		e.preventDefault();
  		var userGuess = parseInt(document.getElementById("userGuess").value);
  		var guesses = parseInt(document.getElementById("count").value);
  		console.log(guesses);
  		
  		if (userGuess == randomNumber){
  			$("#feedback").text("You Got it!");
  		}

  		else if(userGuess <= randomNumber + 5 && userGuess>= randomNumber - 5){
  			$("#feedback").text("Hot, Hot, Hot!");
  		}

  		else if (userGuess <= randomNumber + 10 && userGuess >= randomNumber - 10){
  			$("#feedback").text("Warm. Keep Going");
  		
  		} else {
  			$("#feedback").text("Icy cold");
  		} 		
  
  	$("#guessList").append("<li>" + userGuess + "</li>");

  	});

});

function getRandomNumber(min, max) {
    randomNumber = Math.floor(Math.random() * (max - min) + min);
}
