document.getElementById("StartBtn").addEventListener("click", startTimer);
document.getElementById("PauseBtn").addEventListener("click", pauseTimer);
document.getElementById("ResetBtn").addEventListener("click", resetTimer);

let milliseconds = 0;
let seconds = 0;
let minutes = 0;

let timer = null;
let isRunning = false;

function startTimer() {
    if (!isRunning) {
        timer = setInterval(updateTimer, 10);
        isRunning = true;
    }
}

function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;

    milliseconds = 0;
    seconds = 0;
    minutes = 0;

    document.querySelector(".timerdisplay").innerHTML = "00.00.00";
}

function updateTimer() {
    milliseconds += 10;

    if (milliseconds >= 1000) {
        milliseconds = 0;
        seconds++;
    }

    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }

    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 100 ? "0" + (milliseconds / 10) : milliseconds / 10;

    document.querySelector(".timerdisplay").innerHTML = `${m}.${s}.${ms}`;
}
