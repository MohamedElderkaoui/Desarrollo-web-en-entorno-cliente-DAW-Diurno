
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
    else if (guess === secretNumber) {
        displayMessage('Correct number!')
        if (score > highscore) {
            highscore = score
            highscoreField.textContent = highscore

        }
        //TODO: #1 VISUAL EL NUMERO , CAMBIAR COLOR DE FONDO
        numberField.textContent = secretNumber
        body.style.backgroundColor = '#60b347'
        body.backgroundColor = 'green'

        numberField.textContent = secretNumber
}else{
        if (score > 1) {
            displayMessage(guess > secretNumber? '📈 Too high!' : '📉 Too low!')
            score--
            scoreField.textContent = score
        } else {
            displayMessage('💢 You lost the game!')
            scoreField.textContent = 0
        }


}
})
//´TODO:  
/**     
 * guardar el numero highscore
 * boton de nuevo juego again
 * 
 */
document.querySelector('.again').addEventListener('click', () => {
    if (score > highscore) {
    highscoreField.textContent = score.value
    }
    body.style.backgroundColor = '#fff'
    score = 20
    secretNumber = Math.trunc(Math.random() * 20) + 1
    displayMessage('Start guessing...')
    scoreField.textContent = score
    numberField.textContent = '?'
    guessField.value = ''
    body.style.backgroundColor = '#222'
})

console.log(secretNumber)