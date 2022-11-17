
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const guessField = document.querySelector('.guess')
const messageField = document.querySelector('.message')
const numberField = document.querySelector('.number')
const highscoreField = document.querySelector('.highscore')
const scoreField = document.querySelector('.score')
const body = document.querySelector('body')

function displayMessage(msg) {
  messageField.textContent = msg
}
document.querySelector('.check').addEventListener('click', () => {
    console.log('numeric', messageField.value, guessField.value , secretNumber, score, highscore)
    const guess = Number(guessField.value) 
    if (!guess) displayMessage('No number!')
}
)