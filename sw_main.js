let timer;
let isRunning = false;
let seconds = 0;
let lapCounter = 1;

function startStopwatch() {
    if (!isRunning) {
        timer = setInterval(updateStopwatch, 1000);
        isRunning = true;
    }
}

function stopStopwatch() {
    clearInterval(timer);
    isRunning = false;
}

function resetStopwatch() {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    lapCounter = 1;
    updateDisplay();
    clearLapList();
}

function recordLap() {
    if (isRunning) {
        const lapTime = formatTime(seconds);
        const lapItem = document.createElement('li');
        lapItem.textContent = `Lap ${lapCounter}: ${lapTime}`;
        document.getElementById('lapList').appendChild(lapItem);
        lapCounter++;
    }
}

function updateStopwatch() {
    seconds++;
    updateDisplay();
}

function updateDisplay() {
    const formattedTime = formatTime(seconds);
    document.getElementById('display').textContent = formattedTime;
}

function clearLapList() {
    const lapList = document.getElementById('lapList');
    lapList.innerHTML = '';
}

function formatTime(timeInSeconds) {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return (
        pad(hours) + ':' +
        pad(minutes) + ':' +
        pad(seconds)
    );
}

function pad(value) {
    return value < 10 ? '0' + value : value;
}
