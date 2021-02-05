const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const refs = {
    buttonStartRef: document.querySelector('button[data-action="start"]'),
    buttonStopRef: document.querySelector('button[data-action="stop"]'), 
}

refs.buttonStartRef.addEventListener("click", randomColorsStart);
refs.buttonStopRef.addEventListener("click", randomColorsStop);

 
let intervalId = null;

function randomColorsStart() {
    // refs.buttonStartRef.removeEventListener("click", randomColorsStart);
    refs.buttonStartRef.setAttribute("disabled", "true");

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
     refs.buttonStartRef.removeAttribute("disabled");
    clearInterval(intervalId);
}