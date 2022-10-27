function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bntStart = document.querySelector("[data-start]");
const bntStop = document.querySelector("[data-stop]");
const body = document.querySelector('body');
let timerId = null;

bntStart.addEventListener('click', onStart);

function onStart(e){
    timerId = setInterval(() => {body.style.backgroundColor = getRandomHexColor()}, 1000);
 if(bntStart.disabled = true){
    bntStop.disabled = false;
 }
}

bntStop.addEventListener('click', onStop);
function onStop(e){
   if(bntStop.disabled = true){
    bntStart.disabled = false
   }
   clearInterval(timerId);
}


