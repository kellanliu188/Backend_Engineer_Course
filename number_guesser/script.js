let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

function compareGuesses(humanGuess, computerGuess, targetNumber) {
    humanDistance = Math.abs(targetNumber - humanGuess);
    computerDistance = Math.abs(targetNumber - computerGuess)
    if (humanDistance < computerDistance || humanDistance === computerDistance) {
        return true;
    } else {
        return false;
    }
};

const updateScore = (winner) => winner === 'human' ? humanScore++ : computerScore++;

const advanceRound = () => currentRoundNumber++;
