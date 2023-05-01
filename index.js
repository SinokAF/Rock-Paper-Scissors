const rockButton = document.getElementById('rock')
const paperButton = document.getElementById('paper')
const scissorsButton = document.getElementById('scissors')

const playerChoiceDisplay = document.getElementById('player-result')
const computerChoiceDisplay = document.getElementById('computer-result');
const resultDisplay = document.getElementById('game-result');

const buttons = [rockButton, paperButton, scissorsButton]

const handleClick = (event) => {
    const computerChoice = buttons[Math.floor(Math.random() * buttons.length)].id
    const playerChoice = event.target.id
    getResult(playerChoice, computerChoice)
}

buttons.forEach(button => {
    button.addEventListener('click', handleClick)
})

const getButtonIcon = (choice) => {

    const iElement = document.createElement('i')

    switch (choice) {
        case 'rock':
            iElement.classList.add('fa-regular', 'fa-hand-back-fist', 'fa-4x', 'custom-icon-color', 'icon-choice-display')
            return iElement

        case 'paper':
            iElement.classList.add('fa-regular', 'fa-hand', 'fa-4x', 'custom-icon-color', 'icon-choice-display')
            return iElement

        case 'scissors':
            iElement.classList.add('fa-regular', 'fa-hand-scissors', 'fa-4x', 'custom-icon-color', 'icon-choice-display')
            return iElement
        default:
            break;
    }
}

/*const removeChildElement = (choiceDisplay) => {

    if (choiceDisplay.children.length > 1) {
        choiceDisplay.removeChild(choiceDisplay.children[0])
    }
}*/


const getResult = (playerChoice, computerChoice) => {

    switch (playerChoice + computerChoice) {
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':

            // Affichage des choix des joueurs
            playerChoiceDisplay.insertAdjacentElement('afterend', getButtonIcon(playerChoice))
            computerChoiceDisplay.insertAdjacentElement('afterend', getButtonIcon(computerChoice))
            resultDisplay.textContent = "YOU WIN !"
            break

        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':

            // Affichage des choix des joueurs
            playerChoiceDisplay.insertAdjacentElement('afterend', getButtonIcon(playerChoice))
            computerChoiceDisplay.insertAdjacentElement('afterend', getButtonIcon(computerChoice))
            resultDisplay.innerHTML = "YOU LOST !"
            break

        case 'paperpaper':
        case 'scissorsscissors':
        case 'rockrock':

            // Affichage des choix des joueurs
            playerChoiceDisplay.insertAdjacentElement('afterend', getButtonIcon(playerChoice))
            computerChoiceDisplay.insertAdjacentElement('afterend', getButtonIcon(computerChoice))
            resultDisplay.innerHTML = "DRAW !"
            break
    }
}