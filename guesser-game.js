// Timer for the game
const currentTime = Date.now()
const timer = document.getElementById('timer');

timeCalc = (div) => {
    val = String((Math.floor((Date.now() - currentTime) / div) % 60))
    return val.length == 1 ? 0+val : val;
}

setInterval(() => {
    const hours = timeCalc(3600000)
    const mins = timeCalc(60000)
    const secs = timeCalc(1000)
    if (!timer.style.color) {timer.style.color = 'green'}
    if(Number(mins) > 5) {timer.style.color = 'orange'}
    if(Number(mins) > 10) {timer.style.color = 'red'}
    timer.innerText = `Timer: ${hours}:${mins}:${secs}`;
})

// This will import soundtrack for the website
var soundtrack = new Audio('song.mp3')

// Functions to play and pause music
let playing = false

toggleAudio = () => {
    if (playing) {soundtrack.load(); playing = false} 
    else {soundtrack.play(); playing = true}
}

toggleAudio()

// An array of all US states
let states = [
    'Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois',
    'Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana',
    'Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania',
    'Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming'
]

// An array of all US states the player has entered
var found = []

// Div tag to add p tags
let block = document.getElementById('state-box')

// The input box
let enter = document.getElementById('entry')

// Check enter press key
enter.addEventListener('keyup',(event) => {if (event.key == "Enter") {stateCheck()}})

// Creates a p tag for each state 
for (i = 0; i < states.length; i++) {
    const el = document.createElement('p')
    el.setAttribute('id', i)

    // Assigns class to give colour variation
    if (i % 2) {el.setAttribute('class', 'oneBox boxes')}
    else{el.setAttribute('class', 'twoBox boxes')}

    // Puts state names into each p tag and displays the p tag inside the state-box div tag
    el.innerText= states[i]
    block.appendChild(el)
}

// Assign random animation to each State box
wordAnimation = () => {

    var ss = document.styleSheets;

    // Array to hold keyframes
    var anims = [];
    for (s in ss) {
        if (ss[s].cssRules) {

            // Loop through all the rules to find keyframes
            for (var r = ss[s].cssRules.length - 1; r >= 0; r--) {
                var rule = ss[s].cssRules[r];
                if ((rule.type === window.CSSRule.KEYFRAMES_RULE || rule.type === window.CSSRule.WEBKIT_KEYFRAMES_RULE)) {
                    anims.push(rule.name);
                }
            }
        }
    }

    // Select random animation
    const ani = Math.floor(Math.random() * anims.length)
    return anims[ani]
}

// Function to process the user guesses
stateCheck = () => {
    // Checks if the state has already been found
    checkFound = found.filter(name => name.toLowerCase() == enter.value.toLowerCase()).length
    if (checkFound) {return}

    // Checks if the state is valid
    checkState = states.filter(name => name.toLowerCase() == enter.value.toLowerCase())
    if(checkState.length) {

        // Adds state to array of found states
        found.push(checkState[0])

        // Changes color of states found
        box = document.getElementById(states.indexOf(checkState[0]))
        if (box.className.includes("oneBox")) {
            box.style.color = "rgb(58, 58, 58)";
        }
        else {
            box.style.color = "rgb(204, 203, 203)"
        }
        box.style.animation = `${wordAnimation()} 1.5s linear`
        
        // Clear input box
        enter.value = ""

        if (found.length == 50) {
            toggleAudio()
            setTimeout(() => {window.open('','_self').close(); window.open('welldone.html')}, 1700)
        }
    }
}
console.log(document.getElementById('2').className)