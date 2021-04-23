let display = document.getElementById('display');
let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
let clearButton = document.getElementById('clear');

let timer;
let current = 0;

display.innerText = parseFloat(current / 10).toFixed(1);

startButton.addEventListener('click', () => {
    clearInterval(timer);
    timer = startTimer();
});

stopButton.addEventListener('click', () => {
    stopTimer(timer);
})

clearButton.addEventListener('click', () => {
    clearTimer(timer);
})

function intervalHandler() {
    display.innerText = parseFloat(current / 10).toFixed(1);
    current = current + 1;
}

function startTimer() {
    let timer = setInterval(intervalHandler, 100);
    return timer;
}

function stopTimer(timer) {
    clearInterval(timer);
}

function clearTimer(timer) {
    clearInterval(timer);
    current = 0;
    display.innerText = parseFloat(current / 10).toFixed(1);
} 
