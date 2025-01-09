// CHARACTER CREATION
const characterCreation = document.getElementById('character-creation')

// CAT SELECT
const leftButton = document.getElementById('left')
const rightButton = document.getElementById('right')
const characterSelect = document.getElementById('character-select')
let catCount = 1
let cat = {}

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
    const today = new Date()
    cat.name = catName.value
    cat.dob = `${today.getFullYear()}` + '-' + `${today.getMonth() + 1}` + '-' + `${today.getDate()}`
    cat.hunger = 0
    cat.tired = 0
    cat.bored = 0
    cat.health = 0
    cat.wisdom = 0
})

// GAME WINDOW

// BUTTONS
const gameWindow = document.getElementById('game-window')
const feed = document.getElementById('feed')
const light = document.getElementById('light')
const play = document.getElementById('play')
const heal = document.getElementById('heal')
const clean = document.getElementById('clean')
const stats = document.getElementById('stats')
const spray = document.getElementById('spray')
const look = document.getElementById('look')

const statsPopup = document.getElementById('stats-popup')

stats.addEventListener('click', () => {
    const h3 = document.createElement('h3')
    h3.textContent = cat.name
    const p = document.createElement('p')
    p.innerHTML = 'HUNGER: ' + createHearts(cat.hunger) + '<br>' + 'TIRED: ' + createHearts(cat.tired) + '<br>' + 'BORED: ' + createHearts(cat.bored) + '<br>' + 'HEALTH: ' + createHearts(cat.health) + '<br>' + 'WISDOM: ' + createHearts(cat.wisdom)

    if (statsPopup.style.opacity === '0') {
        statsPopup.style.opacity = '1'
        statsPopup.append(h3, p)

    } else {
        statsPopup.style.opacity = '0'
        statsPopup.innerHTML = ''
    }

})


function createHearts(catValue) {
    let full = '●'
    let empty = '○'
    let statDisplay = []
    for (let i = 0; i < 5; i++) {
        i < catValue ? statDisplay.push(full) : statDisplay.push(empty)
    }
    return statDisplay.join(' ')
}