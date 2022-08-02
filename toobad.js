const dropCount = 900;
// function to generate a random number range.
function randRange( minNum, maxNum) {
    return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
  }
  
// function to generate drops
rain = () => {

for( i=1;i<dropCount;i++) {
    var ranLeft = randRange(0,1600);
    var ranTop = randRange(-1000,1400);

    const el = document.createElement('div')
    console.log(el)
    el.setAttribute('id', 'drop '+ i)
    el.setAttribute('class', 'drop')
    const rainfall = document.getElementById('rain')
    console.log(rainfall)

    rainfall.appendChild(el)
    const droplet = document.getElementById(`drop ${i}`)
    droplet.style.left = ranLeft;
    droplet.style.top = ranTop;
    }
}

// Make it rain
rain();
