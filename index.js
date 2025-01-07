// CHARACTER CREATION
const characterCreation = document.getElementById('character-creation')

// CAT SELECT
const leftButton = document.getElementById('left')
const rightButton = document.getElementById('right')
const characterSelect = document.getElementById('character-select')
let catCount = 1;
left.addEventListener('click', () => {
    catCount = catCount > 1 ? catCount - 1 : catCount
    characterSelect.src = `./images/cat${catCount}.gif`
})
rightButton.addEventListener('click', () => {
    catCount = catCount < 9 ? catCount + 1 : catCount
    characterSelect.src = `./images/cat${catCount}.gif`
})

// SUBMITTING YOUR CAT
const form = document.getElementById('form')
const catName = document.getElementById('name')
const character = document.getElementById('character')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (confirm('are you sure you would like this cat?')) {
        characterCreation.style.transform = 'translate(0px, -100vh)'
        character.src = `./images/cat${catCount}.gif`
    }
})

// GAME WINDOW
const gameWindow = document.getElementById('game-window')
const feed = document.getElementById('feed')
const light = document.getElementById('light')
const play = document.getElementById('play')
const heal = document.getElementById('heal')
const clean = document.getElementById('clean')
const stats = document.getElementById('stats')
const spray = document.getElementById('spray')
const look = document.getElementById('look')