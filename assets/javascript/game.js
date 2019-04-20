//Global variables

var wordsArray = ["Juvenile", "Biggie Smalls", "Eminem", "Ludacris", "Nick Jonas", "Lady Gaga", "Kanye West", "Joyner Lucas", "Rick Ross", "Halsey", "Iggy Azalea", "Elvis Presley", "Whitney Houston", "sia"];
var wrongLettersArray = []; //empty araay to store users wrong guesses 
var guessesLeft = 9; //stores number of guesses remaining
var lettersArray = []; //holds word to be guessed
var currentWordArray = [];//holds _ _ _ _ _
var wins = 0;
var losses = 0;
var userGuess = "";
var winsText = document.getElementById("wins-text");
var currentText = document.getElementById("currentWord-text");
var guessesText = document.getElementById("guesses-text");
var lettersText = document.getElementById("lettersGuessed-text");
var lossesText = document.getElementById("losses-text");
var gameWord = "";
var noSpaces = "";
var blankSpaces = 0;

//functions

function startGame() {

    //gets randomword from array
    gameWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];

    //converts word to lowercase and removes spaces
    gameWord = gameWord.toLowerCase();
    noSpaces = gameWord.replace(/\s+/g, '');
    lettersArray = noSpaces.split("");
    blankSpaces = noSpaces.length;



    //Reset
    guessesText = 9;
    currentWordArray = [];
    wrongLettersArray = [];

    //loop to create _ _ _ _ 
    for (var i = 0; i < blankSpaces; i++) {
        currentWordArray.push("_");
    }

    //push content to HTML
    currentText.innerHTML = currentWordArray.join(" ");
    winsText.innerHTML = wins;
    lossesText.innerHTML = losses;
    guessArray.push(userGuess);
    guessesText.textContent = guessesLeft;




    //testing & debugging
    console.log(lettersArray);
    console.log(gameWord);
    console.log(noSpaces);
    console.log(noSpaces.length);
    console.log(currentWordArray);
















    // create _ _ _ _ 


    // if (guessesLeft <= 0) {
    //     alert("Game Over");
    // }

    // for (var i = 0; i < noSpaces.length; i++) {


    //     var indices = [];
    //     for (var i = 0; i < noSpaces.length; i++) {
    //         if (gameWord[i] === userGuess) indices.push(i);
    //         alert(indices); 
    //     }




    //make sure user still has guesses left



    // } {
    //     alert("You guessed a correct letter");

    //     //reduce guesses and push guesses left to HTML
    //     guessesLeft--;
    //     alert("You have " + guessesLeft + " guesses left");









    // }
    // else {
    //     alert("You missed ");
    //     guessesLeft--;
    //     alert("You have " + guessesLeft + " guesses left");

    // }

    //check userguess vs letters in user guess










}

//Main process
startGame();

document.onkeyup = function (event) {
    //gets key pushed from user
    var userGuess = event.key;

    //testing 
    console.log(userGuess);


}

