let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);

function checkGuess() {
    let guessedNumber = parseInt(userInput.value);
    if (guessedNumber < randomNumber) {
        gameResult.textContent = "Too low! Try Again";
        gameResult.style.backgroundColor = "#1e217c";
    } else if (guessedNumber > randomNumber) {
        gameResult.textContent = "Too high! Try Again";
        gameResult.style.backgroundColor = "#1e217c";
    } else if (guessedNumber === randomNumber) {
        gameResult.textContent = "Congratulation, You guessed it right!";
        gameResult.style.backgroundColor = "green";
    } else {
        gameResult.textContent = "Provide a valid user input!";
        gameResult.style.backgroundColor = "#1e217c";
    }


}