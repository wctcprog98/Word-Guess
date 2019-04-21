//Global variables

var wordsArray = ["Juvenile", "Biggie Smalls", "Eminem", "Ludacris", "Nick Jonas", "Lady Gaga", "Kanye West", "Joyner Lucas", "Rick Ross", "Halsey", "Iggy Azalea", "Elvis Presley", "Whitney Houston", "sia"];
var wrongLettersArray = []; //empty araay to store users wrong guesses 
var guessesLeft = 9; //stores number of guesses remaining
var lettersArray = ""; //holds word to be guessed
var currentWordArray = [];//holds _ _ _ _ _
var guessArray = [];
var wins = 0;
var losses = 0;
var userGuess = "";
var winsText = document.getElementById("wins-text");
var currentText = document.getElementById("currentWord-text");
var guessesText = document.getElementById("guesses-text");
var lettersText = document.getElementById("lettersGuessed-text");
var lossesText = document.getElementById("losses-text");
var lettersGuessed = document.getElementById("lettersGuessed-text");
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
    console.log("This is the letters Array" + lettersArray);
    console.log("This is the userGuess" + userGuess);


    //Reset
    function reset() {
        guessesLeft = 9;
        currentWordArray = [];
        wrongLettersArray = [];   
    }


    //loop to create _ _ _ _ 
    for (var i = 0; i < blankSpaces; i++) {
        currentWordArray.push("_");
    }

    //push content to HTML
    currentText.innerHTML = currentWordArray.join(" "); //dashes _ _ _ 
    winsText.innerHTML = wins; //wins
    lossesText.innerHTML = losses; //loses
    guessesText.innerHTML = guessesLeft; //guesses remaining
    
   
    

}


//testing & debugging
// console.log(lettersArray);
// console.log(gameWord);
// console.log(noSpaces);
// console.log(noSpaces.length);
// console.log(currentWordArray);
// console.log(guessArray); 
// console.log(lettersArray); 

// console.log(guessArray);

function checkGuesses() {

    for (var i = 0; i < blankSpaces; i++) {

        if (lettersArray[i] === userGuess) {
            currentWordArray[i] = userGuess;
            currentText.innerHTML = currentWordArray.join(" "); 
            console.log(currentWordArray);
         
        }
        else {

            
            wrongLettersArray.push(userGuess[i]);
            console.log(wrongLettersArray); 
            guessesLeft--; 
            // guessesText.innerHTML = guessesLeft; 
        }

    }

}



//testing

//     function gameOver() {

//         startGame(); 

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











//Main process
startGame();
// console.log(gameWord); 

document.onkeyup = function (event) {
    //gets key pushed from user
    userGuess = event.key;

    checkGuesses();
    // gameOver();





    guessArray.push(userGuess);
    lettersText.innerHTML = guessArray.join(" ");
    // console.log(userGuess); 


}


