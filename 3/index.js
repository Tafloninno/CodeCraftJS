const time = document.getElementById("time")
let secondsElapsed = 0;
let interval = null;

function padStart(value){
    return String(value).padStart(2, "0")
}

function setTime(){
    const minutes = Math.floor(secondsElapsed / 60)
    const seconds = secondsElapsed % 60
    time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}`
}

function timer(){
    secondsElapsed++;
    setTime()
}

function startClock(){
    if(interval) stopClock()
    interval = setInterval(timer, 1000)
}

function stopClock(){
    clearInterval(interval)
}

function resetClock(){
    secondsElapsed = 0
    setTime()
}