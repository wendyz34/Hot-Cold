// Get ID
const a1 = document.querySelector("#a1");
const a5 = document.querySelector("#a5");
const a10 = document.querySelector("#a10");
const a25 = document.querySelector("#a25");
const b1 = document.querySelector("#b1");
const b5 = document.querySelector("#b5");
const b10 = document.querySelector("#b10");
const b25 = document.querySelector("#b25");
const c = document.querySelector("#commit");
const resetButton = document.querySelector("#resetButton");
const currentElement = document.querySelector("#current");
const resultElement = document.querySelector("#result");

// Add listeners
a1.addEventListener("click", () => handleClick("a1"));
a5.addEventListener("click", () => handleClick("a5"));
a10.addEventListener("click", () => handleClick("a10"));
a25.addEventListener("click", () => handleClick("a25"));
b1.addEventListener("click", () => handleClick("b1"));
b5.addEventListener("click", () => handleClick("b5"));
b10.addEventListener("click", () => handleClick("b10"));
b25.addEventListener("click", () => handleClick("b25"))
c.addEventListener("click", commit);
resetButton.addEventListener("click", resetButtonHandler);

// Initialize number
let current = 50;
let guessNumber = Math.floor(Math.random() * 100 + 1);
let numGuess = 5;

// Function to update the current number
function updateCurrent(value) {
    current += value;
    currentElement.textContent = "Current Value: " + current;
}

// Handle button clicks
function handleClick(buttonId) {
    if (buttonId === "a1") {
        updateCurrent(1);
    } else if (buttonId === "a5") {
        updateCurrent(5);
    } else if (buttonId === "a10") {
        updateCurrent(10);
    } else if (buttonId === "a25") {
        updateCurrent(25);
    } else if (buttonId === "b1") {
        updateCurrent(-1);
    } else if (buttonId === "b5") {
        updateCurrent(-5);
    } else if (buttonId === "b10") {
        updateCurrent(-10);
    } else if (buttonId === "b25") {
        updateCurrent(-25);
    }
}

// Check the guessed value
function commit() {
    const difference = Math.abs(current - guessNumber);
    if (difference <= 5) {
        resultElement.textContent = "Within 5: Very Hot";
    } else if (difference <= 8) {
        resultElement.textContent = "Within 6-8: Hot";
    } else if (difference <= 15) {
        resultElement.textContent = "Within 9-15: Very Warm";
    } else if (difference <= 20) {
        resultElement.textContent = "Within 16-20: Warm";
    } else if (difference <= 30) {
        resultElement.textContent = "Within 21-30: Cool";
    } else if (difference <= 40) {
        resultElement.textContent = "Within 31-40: Very Cool";
    } else if (difference <= 55) {
        resultElement.textContent = "Within 41-55: Cold";
    } else {
        resultElement.textContent = "More than 55 away: Very Cold";
    }
    numGuess--;
    document.querySelector("#guesses").textContent = "Number of guesses left: " + numGuess;
    if (numGuess === 0) {
        c.disabled = true;
        resultElement.textContent = "Out of guesses. The number was " + guessNumber;
    }
}

// Reset button handler
function resetButtonHandler() {
    location.reload();
}
