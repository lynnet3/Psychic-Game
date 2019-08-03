var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "g", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var wins = 0;
var losses = 0;
var guessesMade = 9;
var playersChoices = [];

document.onkeyup = function(event){
    
    var playerGuess = event.key;
    
    var computerGuess = computerChoices [Math.floor(Math.random() * computerChoices.length)];

    var choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "g", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    if (choices.indexOf(playerGuess) > -1){
        
        if (playerGuess === computerGuess){
            wins++;
            guessesMade = 9;
            playersChoices =[];
        }

        if (playerGuess != computerGuess){
            guessesMade --;
            playersChoices.push(playerGuess);
        }

        if (guessesMade === 0){
            guessesMade = 9;
            losses ++;
            playersChoices[];
        }

        
    }
}
