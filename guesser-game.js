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
    if (i % 2) {el.setAttribute('class', 'oneBox')}
    else{el.setAttribute('class', 'twoBox')}

    // Puts state names into each p tag and displays the p tag inside the state-box div tag
    el.innerText= states[i]
    block.appendChild(el)
}

wordAnimation = () => {
    var ss = document.styleSheets;
    var anims = [];
    for (s in ss) {
        if (ss[s].cssRules) {
            // loop through all the rules
            for (var r = ss[s].cssRules.length - 1; r >= 0; r--) {
                var rule = ss[s].cssRules[r];
                if ((rule.type === window.CSSRule.KEYFRAMES_RULE || rule.type === window.CSSRule.WEBKIT_KEYFRAMES_RULE)) {
                    anims.push(rule.name);
                }
            }
        }
    }

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
        if (box.className == "oneBox") {
            box.style.color = "seagreen";
        }
        else {
            box.style.color = "skyblue"
        }
        box.style.animation = `${wordAnimation()} 1.5s linear`
        console.log(box)
        
        // Clear input box
        enter.value = ""

        if (found.length == 4) {
            toggleAudio()
            setTimeout(() => {window.open('','_self').close(); window.open('welldone.html')}, 1700)
        }
    }
}
