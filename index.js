const rockButton = document.getElementById('rock')
const paperButton = document.getElementById('paper')
const scissorsButton = document.getElementById('scissors')
const playerScoreDisplay = document.getElementById('player-score')
const computerScoreDisplay = document.getElementById('computer-score')
const playerChoiceContainer = document.getElementById('player-icons-selected')
const computerChoiceContainer = document.getElementById('computer-icons-selected')
const resultDisplay = document.getElementById('game-result');
const buttons = [rockButton, paperButton, scissorsButton]

const checkbox = document.getElementById('checkbox-id')
const resetButton = document.querySelector('.reset-button')

var showSelectedIcons = false
var playerScore = 0
var computerScore = 0

const handleClick = (event) => {
    const computerChoice = buttons[Math.floor(Math.random() * buttons.length)].id
    const playerChoice = event.target.id

    // Supprimer les anciens choix
    if (!showSelectedIcons) {
        removeSelectedIconChoice(playerChoiceContainer)
        removeSelectedIconChoice(computerChoiceContainer)
    }


    // Ajouter les icones dans les choix des joueurs
    playerChoiceContainer.appendChild(getButtonIcon(playerChoice))
    computerChoiceContainer.appendChild(getButtonIcon(computerChoice))

    getResult(playerChoice, computerChoice)
}

buttons.forEach(button => {
    button.addEventListener('click', handleClick)
})

checkbox.addEventListener('click', e => {
    if (checkbox.checked) {
        showSelectedIcons = true
    } else {
        showSelectedIcons = false
    }
})

resetButton.addEventListener('click', e => {
    playerScore = 0
    computerScore = 0
    removeSelectedIconChoice(playerChoiceContainer)
    removeSelectedIconChoice(computerChoiceContainer)
    playerScoreDisplay.textContent = "Player score : " + playerScore
    computerScoreDisplay.textContent = "Computer score : " + computerScore
    resultDisplay.textContent = ""
})

const removeSelectedIconChoice = (choiceContainer) => {
    while (choiceContainer.firstChild != null) {
        choiceContainer.removeChild(choiceContainer.firstChild)
    }
}

const getButtonIcon = (choice) => {
    const iElement = document.createElement('i')

    switch (choice) {
        case 'rock':
            iElement.classList.add('fa-regular', 'fa-hand-back-fist', 'fa-3x', 'custom-icon-color', 'icon-choice-display')
            return iElement

        case 'paper':
            iElement.classList.add('fa-regular', 'fa-hand', 'fa-3x', 'custom-icon-color', 'icon-choice-display')
            return iElement

        case 'scissors':
            iElement.classList.add('fa-regular', 'fa-hand-scissors', 'fa-3x', 'custom-icon-color', 'icon-choice-display')
            return iElement
        default:
            break;
    }
}

const getResult = (playerChoice, computerChoice) => {

    switch (playerChoice + computerChoice) {
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':
            playerScore += 1
            playerScoreDisplay.textContent = "Player score : " + playerScore
            resultDisplay.textContent = "YOU WIN !"
            break
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
            computerScore += 1
            computerScoreDisplay.textContent = "Computer score : " + computerScore
            resultDisplay.textContent = "YOU LOST !"
            break
        case 'paperpaper':
        case 'scissorsscissors':
        case 'rockrock':
            resultDisplay.textContent = "DRAW !"
            break
    }
}

const resetScores = () => {

}