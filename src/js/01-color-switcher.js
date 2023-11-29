const bodyEl = document.querySelector('body')
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
console.log(bodyEl.dataset)

setTimeout
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
//let timeId = null;
function onClickStart() {
    startBtn.setAttribute('disabled',"")
    stopBtn.removeAttribute('disabled')
    timeId = setInterval(() => {
        //const bodyColor = getRandomHexColor()
        bodyEl.style.backgroundColor = getRandomHexColor()
    }, 1000)
}
//console.log(startBtn)
startBtn.addEventListener('click', onClickStart);
function onClickStop() {
    clearInterval(timeId);
    //stopBtn.setAttribute('disabled', '')
    startBtn.removeAttribute('disabled')
}
stopBtn.addEventListener('click', onClickStop)