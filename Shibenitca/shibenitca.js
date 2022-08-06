
let html1 = document.getElementById('blue');
    // Create an array of words
    var words = [
        "javascript",
        "monkey",
        "amazing",
        "pancake"
      ];
  
      // Pick a random word
      function pickWord () {
        return words[Math.floor(Math.random() * words.length)];
      }
      var word = pickWord (words);    
  
      // Set up the answer array
      function setupAnswerArray (word) {
        let answerArray = [];
        for (var i = 0; i < word.length; i++) {
          answerArray[i] = "_";
        }
        return answerArray;
    }
      var answerArray = setupAnswerArray (word);
             
      var remainingLetters = word.length;
      var guesses = 20;
  
      // The game loop
      function showPlayerProgress (answerArray) {
        alert(answerArray.join(" "));
      }
      
      function getGuess () {
       return prompt("Guess a letter, or click Cancel to stop playing.");
      }

      function updateGameState() {
        guess = guess.toLowerCase();
        // Update the game state with the guess
        let appearances = 0;
        for (var j = 0; j < word.length; j++) {
          if (word[j] === guess && answerArray[j] === "_") {
            answerArray[j] = guess;
            appearances++;
          }
        }
        return appearances;
      }
      
      while (remainingLetters > 0 && guesses > 0) {
        // Show the player their progress
        showPlayerProgress (answerArray);
        // Get a guess from the player
        var guess = getGuess();
        if (guess === null) {
          // Exit the game loop
          break;
        } else if (guess.length !== 1) {
          alert("Please enter a single letter.");
        } else if (isNaN(Number(guess)) === false) {
          alert("Please enter a word, not a number");
        } else {
        var correctGuesses = updateGameState(guess, word, answerArray);
        remainingLetters-=correctGuesses;
        }
      // The end of the game loop
      }
  
      // Show the answer and congratulate the player
      function showAnswerAndCongratulatePlayer () {
        showPlayerProgress(answerArray);
        if (guesses > 0) {
          alert("Good job! The answer was " + answerArray.join(" "));
        } else {
          alert("Too bad! The answer was " + word);
        }

      }
      showAnswerAndCongratulatePlayer (answerArray);
      






