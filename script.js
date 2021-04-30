let display = document.getElementById('display');
let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
let clearButton = document.getElementById('clear');

let vowelsInput = document.getElementById('vowelsInput');
let vowelsButton = document.getElementById('vowelsButton');
let vowelsResult = document.getElementById('vowelsResult');

vowelsButton.addEventListener('click', stuffToDoWhenButtonIsClicked)

function stuffToDoWhenButtonIsClicked() {
    let str = vowelsInput.value;
    let result = countVowelsInString(str);

    vowelsResult.innerText = result;
}

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

function countVowelsInString(str) {
    let count = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) {
            count++;
        }
    }

    return count;
}


// All these are the same:

function functionDeclaration() {
    console.log('Hello');
}


let arrowFunction = () => {
    console.log('Hello');
}

let functionExpression = function() {
    console.log('Hello');
}

let add = (num1, num2) => num1 + num2;