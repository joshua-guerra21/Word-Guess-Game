var nationalChamps = [
    "texas",
    "southren california",
    "alabama",
    "clemson",
    "ohio state",
    "flordia state",
    "auburn",
    "florida",
    "louisiana state",
    "flordia",
    "miami",
    "oklahoma",
    "tennessee",
    "michigan",
    "nebraska",
    "washington",
    "colorado",
    "georgia tech",
    "notre dame",
    "penn state",
    "brigham young",
    "georgia",
    "pittsburgh",
    "michigan state",
    "arkansas",
    "minnesota",
    "mississippi",
    "syracuse",
    "iowa",
    "california los angeles",
    "maryland",
    "army",
    "texas christian",
    "illinois",
    "yale",
    "standford",
    "cornell",
    "princeton",
    "pennsylvania",
    "chicago",
]

var currentWord = "";
var lettersInCurrentWord = [];
var numberOfBlanks = 0;
var gameArea = [];
var incorrectGuesses = [];
var wins = 0;
var remaining = 9;

window.onload = function() {
    
    function startGame() {
        remaining = 9;
       
        currentWord = nationalChamps[Math.floor(Math.random() * nationalChamps.length)];
        
        lettersInCurrentWord = currentWord.split("");
        
        numberOfBlanks = lettersInCurrentWord.length;
        gameArea = [];
        incorrectGuesses = [];
        
        for (var i = 0; i < numberOfBlanks; i++) {
            if (lettersInCurrentWord[i] !== ' ') {
                gameArea.push("_");
            } else { 
                gameArea.push("&nbsp;");
            }

           
            document.getElementById("remaining").innerHTML = remaining;
            document.getElementById("gameArea").innerHTML = gameArea.join("&nbsp;");
            document.getElementById('incorrectGuesses').innerHTML = incorrectGuesses.join(" ");
        }
    }
    
    
    function checkLetters(letter) {
        
        var letterInWord = false;
        
        for (var i = 0; i < numberOfBlanks; i++) {
            if (currentWord[i] == letter) {
                letterInWord = true; 
            }
        }
        
        if (letterInWord) {
            
            for (var i = 0; i < numberOfBlanks; i++) {
                
                if (currentWord[i] == letter) {
                    gameArea[i] = letter;
                }
            }
        }
        
        else {
            incorrectGuesses.push(letter);
            remaining--;
        }
    }

    
    function roundComplete() {
        
        document.getElementById("remaining").innerHTML = remaining;
        document.getElementById("gameArea").innerHTML = gameArea.join(" ");
        document.getElementById("incorrectGuesses").innerHTML = incorrectGuesses.join(" ");
        
        if (lettersInCurrentWord.toString() == gameArea.toString()) {
            wins++;
            alert("You guessed the right team: " + currentWord + "!" + " Good Job!");
            document.getElementById("wins").innerHTML = wins;
           
            startGame();
        }
        
        else if (remaining == 0) {
            alert("You have lost. The correct team name was " + currentWord);
            startGame();
        }
    }

   
    startGame();


    document.onkeyup = function(event) {
        
        letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
        checkLetters(letterGuessed);
        roundComplete();
    }
}