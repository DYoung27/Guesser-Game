let victory = new Audio('victory.mp3')
victory.play()

let close = document.getElementById('close-btn');
close.onclick = () => setTimeout(() => {window.open('','_self').close()}, 300);
