import _ from "./underscore.js";
//猜数游戏
let randomNumber = Math.floor(Math.random() * 100) + 1;
const guess = document.querySelector("guess");
const message = document.querySelector("guessMessage");
const submitButton = document.querySelector("submit");
let guessCount = 1;
const resetButton = document.createElement("button");
resetButton.textContent = "重新开始";
submitButton.append(resetButton);
resetButton.addEventListener("click", resetGame);

function checkGuess() {
    const userGuess = Number(guess.value);
    if (guessCount === 1) {
        message.textContent = "Previous guesses: ";
    }
    if (userGuess === randomNumber) {
        message.textContent = "Congratulations! You got it right!";
        message.style.backgroundColor = "green";
        endGame();
    } else if (guessCount === 10) {
        message.textContent = "!!!GAME OVER!!!";
        message.style.backgroundColor = "red";
        endGame();
    } else {
        message.textContent += userGuess + " ";
        message.style.backgroundColor = "red";
        if (userGuess < randomNumber) {
            message.textContent += "Too low!";
        } else {
            message.textContent += "Too high!";
        }
    }
    guessCount++;
    guess.value = "";
    guess.focus();
}

function endGame() {
    guess.disabled = true;
    submitButton.disabled = true;
}

function resetGame() {
    guessCount = 1;
    guess.disabled = false;
    submitButton.disabled = false;
    message.textContent = "";
    resetButton.hidden = true;
    randomNumber = Math.floor(Math.random() * 100) + 1;
}

submitButton.addEventListener("click", checkGuess);
