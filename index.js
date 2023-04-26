const rockButton = document.getElementById('rock')
const paperButton = document.getElementById('paper')
const scissorsButton = document.getElementById('scissors')

const playerChoiceDisplay = document.getElementById('player-result')
const computerChoiceDisplay = document.getElementById('computer-result');
const resultDisplay = document.getElementById('game-result');

//const buttons = [rockButton, paperButton, scissorsButton]


rockButton.addEventListener('click', function (event) {

    resultDisplay.innerHTML = rockButton.id

})

/*buttons.forEach(button => {

    button.addEventListener('click', onclick => {

        const playerChoice = button.id
        const computerChoice = buttons[Math.floor(Math.random() * buttons.length)]

        resultDisplay.innerHTML = playerChoice
    })

})*/
