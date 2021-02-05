const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const refs = {
    buttonStart: document.querySelector('button[data-action="start"]'),
    buttonStop: document.querySelector('button[data-action="stop"]'), 
}

refs.buttonStart.addEventListener("click", randomColorsStart);
refs.buttonStop.addEventListener("click", randomColorsStop);

 
let intervalId = null;

function randomColorsStart() {
    // refs.buttonStartRef.removeEventListener("click", randomColorsStart);
    refs.buttonStart.setAttribute("disabled", "true");

    const randomIntegerFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    intervalId = setInterval(() => {
        const color = colors.find((value, idx) => {
        return idx === randomIntegerFromInterval(idx, colors.length - 1)
    });
    // console.log(color)
    document.body.style.background = color;
}, 1000)
}

function randomColorsStop() { 
    // refs.buttonStartRef.addEventListener("click", randomColorsStart)
     refs.buttonStart.removeAttribute("disabled");
    clearInterval(intervalId);
}