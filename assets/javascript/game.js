

var wordsArray = ["50 Cent", "Eminem", "Ludacris", "Nick Jonas", "Lady Gaga", "Kanye West", "Joyner Lucas", "Rick Ross", "Halsey", "Iggy Azalea"];
var guessArray = [""];
var guessesLeft = 15;
var wins = 0;
var winsText = document.getElementById("wins-text");
var currentText = document.getElementById("currentWord-text");
var guessesText = document.getElementById("guesses-text");
var lettersText = document.getElementById("lettersGuessed-text");


document.onkeyup = function (event) {


    var userGuess = event.key;
    alert("you pressed the " + userGuess + " key.");

    //random number between 0 and 9 0
    var randomWord = Math.floor(Math.random() * wordsArray.length);
    alert(randomWord);


    //tells us the position in array of random number computer selected

    var guessBank = "";
    var gameWord = (wordsArray[randomWord]);
    gameWord = gameWord.toLowerCase();
    alert(gameWord);
    var noSpaces = gameWord.replace(/\s+/g, '');
    alert(noSpaces);
    alert(noSpaces.length);

    // create _ _ _ _ 



 
    // currentText.textContent = str; 


    //make sure user still has guesses left
    if (guessesLeft <= 0) {
        alert("Game Over");
    }

    for (var i = 0; i < noSpaces.length; i++) {
        
        if (gameWord(i).indexOf(userGuess) > 0) {
            alert("You guessed a correct letter");

            //reduce guesses and push guesses left to HTML
            guessesLeft--;
            alert("You have " + guessesLeft + " guesses left");
            guessesText.textContent = guessesLeft; 








        }
        else {
            alert("You missed ");
            guessesLeft--;
            alert("You have " + guessesLeft + " guesses left");
            guessesText.textContent = guessesLeft; 
        }
    }
    //check userguess vs letters in user guess


 

    //






    };
