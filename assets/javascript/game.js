var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "g", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var wins = 0;
var losses = 0;
var guessesMade = 9;
var playersChoices = [];

var titleText = document.getElementById("title-text");
var directionText = document.getElementById("direction-text");
var winText = document.getElementById("win-text");
var lossesText = document.getElementById("losses-text");
var leftText = document.getElementById("left-text");
var soFarText = document.getElementById("sofar-text")

document.onkeyup = function(event){
    
    var computerGuess = computerChoices [Math.floor(Math.random() * computerChoices.length)];
    var playerGuess = event.key.toLocaleLowerCase;  
    //playersChoices.push(playerGuess);
        // if the player guesses the right letter their wins go up and the guessesMade reset to 9
        if (playerGuess == computerGuess){
            wins++;
            guessesMade = 9;
            playersChoices =[];
        }
        //if the player guesses the wrong letter the amount of guesses go down
        else if (playerGuess !== computerGuess){
            guessesMade --;

        }
        // if the guessesMade hit 0 the losses go up and the counter resets
        else if (guessesMade == 0){
            guessesMade = 9;
            losses ++;
            playersChoices = [];
        }
        var html =
            "<h1>The Psychic Game</h1>"
            "<p>Guess What letter or number I'm thinking of</p>"
            "<p>Wins:"+ wins +"</p>"
            "<p>Losses:" + losses + "</p>"
            "<p>Guesses Left:" + guessesMade +"</p>"
            "<p>Your Guesses so far:" + playersChoices +"</p>"
        //document.getElementById("#psychGame").innerHTML = html;
    }

