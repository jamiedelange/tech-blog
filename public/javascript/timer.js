let timer, currSeconds = 0;

function resetTimer() {
    clearInterval(timer);
    currSeconds = 0;
    timer = setInterval(startIdleTimer, 1000);
}

window.onload = resetTimer;
window.onmousemove = resetTimer;
window.onmousedown = resetTimer; 
window.ontouchstart = resetTimer; 
window.onclick = resetTimer; 
window.onkeypress = resetTimer;

function startIdleTimer() {
    var f = require('../../controllers/home-routes')
    currSeconds++;
    console.log(currSeconds);
    if (currSeconds === 10) {
        return f.timerFunc;
    }
}