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
let num = []; 


// Function to update the current number
function updateCurrent(value) {
    current += value;
    // Ensure current stays within the range 0-100
    current = Math.min(100, Math.max(0, current));
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
// Initialize the guesses array
const guesses = [];

// Check the guessed value
function commit() {
    const difference = Math.abs(current - guessNumber);
    
    // Determine the guess result
    let guessResult = "";

    if (difference <= 5) {
        guessResult = "Within 21-30: Cool!";
        numGuess += 1;
    } else if (difference <= 8) {
        guessResult = "Within 6-8: Hot";
    } else if (difference <= 15) {
        guessResult = "Within 9-15: Very Warm";
    } else if (difference <= 20) {
        guessResult = "Within 16-20: Warm";
    } else if (difference <= 30) {
        guessResult = "Within 21-30: Cool";
    } else if (difference <= 40) {
        guessResult = "Within 31-40: Very Cool";
    } else if (difference <= 55) {
        guessResult = "Within 41-55: Cold";
    } else {
        guessResult = "More than 55 away: Very Cold";
    }

    numGuess--;
    document.querySelector("#guesses").textContent = "Number of guesses left: " + numGuess;

    // Store the current guess and guess result together
    const guessInfo = current + ": " + guessResult;
    guesses.push(guessInfo);

    // Display previous guesses with line breaks
    resultElement.innerHTML = "Previous guesses:<br>" + guesses.join("<br>");

    if (numGuess === 0) {
        c.disabled = true;
        resultElement.innerHTML += "<br>Out of guesses. The number was " + guessNumber;
    }
    // If guessed correctly 
    if (current == guessNumber){
        resultElement.textContent = "You Won!"
    }
}


// Reset button handler
function resetButtonHandler() {
    location.reload();
}
