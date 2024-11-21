
const flags = [
    { src: 'https://flagcdn.com/w320/us.png', name: 'United States' },
    { src: 'https://flagcdn.com/w320/ca.png', name: 'Canada' },
    { src: 'https://flagcdn.com/w320/de.png', name: 'Germany' },
    { src: 'https://flagcdn.com/w320/in.png', name: 'India' }
];

let currIndex = 0;

const flagImg = document.getElementById("flag-img");
const guessInput = document.getElementById("guess");
const submitButton = document.getElementById("submit");
const nextButton = document.getElementById("next");
const message = document.getElementById("message");

function Flag() {
    flagImg.src = flags[currIndex].src;
    guessInput.value = "";
    message.textContent = "";
}

function checkGuess() {
    const userGuess = guessInput.value.trim();
    if (userGuess.toLowerCase() === flags[currIndex].name.toLowerCase()) {
        message.innerHTML = 'Correct!';
        message.style.color = 'green';
    } else {
        message.innerHTML = 'Wrong! Try again.';
        message.style.color = 'red';
    }
}

function nextFlag() {
    currIndex = (currIndex+1)%flags.length;
    Flag();
}

submitButton.addEventListener('click', checkGuess);
nextButton.addEventListener('click', nextFlag);

Flag();
