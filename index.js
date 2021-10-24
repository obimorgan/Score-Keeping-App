const ply1ScoreDisplay = document.querySelector('#ply1-score')
const ply2ScoreDisplay = document.querySelector('#ply2-score')
const ply1btn = document.querySelector('.ply1-btn')
const ply2btn = document.querySelector('.ply2-btn')
const resetBtn = document.querySelector('.reset-btn')
const playingTo = document.getElementById('playing-to')

let player1Score = 0
let player2Score = 0
let winningScore = 0
let isGameOver = false

resetBtn.addEventListener('click', reset)

ply1btn.addEventListener('click', () => {
    if (!isGameOver) {
        player1Score +=1
        if(player1Score === winningScore) {
            isGameOver = true
            ply1ScoreDisplay.classList.add('winner')
            ply2ScoreDisplay.classList.add('looser')
            ply1btn.disabled = true
            ply2btn.disabled = true
        }
        ply1ScoreDisplay.innerText = player1Score
    }

})

ply2btn.addEventListener('click', () => {
    if (!isGameOver) {
        player2Score +=1
        if(player2Score === winningScore) {
            isGameOver = true
            ply2ScoreDisplay.classList.add('winner')
            ply1ScoreDisplay.classList.add('looser')
            ply1btn.disabled = true
            ply2btn.disabled = true
        }
        ply2ScoreDisplay.innerText = player2Score
    }

})

playingTo.addEventListener('change', function () {
    winningScore = parseInt(this.value)
    reset()
})
function reset () {
    isGameOver = false
    player1Score = 0
    player2Score = 0
    ply1ScoreDisplay.innerText = '0'
    ply2ScoreDisplay.innerText = '0'
    ply1ScoreDisplay.classList.remove('winner', 'looser')
    ply2ScoreDisplay.classList.remove('winner', 'looser')
    ply1btn.disabled = false
    ply2btn.disabled = false
}

