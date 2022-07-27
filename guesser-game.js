
// This will import soundtrack for the website
var soundtrack = new Audio("song.mp3")

// Functions to play and pause music
play = () => {soundtrack.play()}
pause = () => {soundtrack.pause()}

// An array of all US states
let states = [
    'Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois',
    'Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana',
    'Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania',
    'Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming'
]

// An array of all US states the player has entered
let found = []


let block = document.getElementById('state-box')
let enter = document.getElementById('entry')

// Creates a p tag for each state 
for (i = 0; i < states.length; i++) {
    const el = document.createElement('p')
    el.setAttribute('id','state-'+ i)

    if (i % 2) {el.setAttribute('class', 'oneBox')}
    else{el.setAttribute('class', 'twoBox')}
    el.innerText= states[i]
    block.appendChild(el)
}

stateCheck = () => {
    console.log(enter.value)
}

