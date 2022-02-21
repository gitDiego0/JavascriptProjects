import "./style.css";

const title = "Stopwatch";

document.querySelector("#app").innerHTML = `
  <h1>${title}</h1>
  <div id="time">
    <span id="mins">00</span>
    <span> : </span>
    <span id="sec">00</span>
    <span> : </span>
    <span id="tens">00</span>
  </div>
  <div id="buttons">
    <button id="start">Start</button>
    <button id="stop">Stop</button>
    <button id="reset">Reset</button>
  </div>
`;

let tens = 0;
let sec = 0;
let mins = 0;

const appendTens = document.querySelector("#tens");
const appendSec = document.querySelector("#sec");
const appendMin = document.querySelector("#mins");

const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");

let Interval;

const startTimer = () => {
  tens++;

  /*Añado el 0 para que el diseño no se mueva 
  constantemente al actualizar las decimas*/

  if (tens <= 9) {
    appendTens.innerHTML = "0" + tens;
  }

  if (tens > 9) {
    appendTens.innerHTML = tens;
  }

  if (tens > 99) {
    sec++;
    appendSec.innerHTML = "0" + sec;
    tens = 0;
    appendTens.innerHTML = "0" + 0;
  }

  if (sec > 9) {
    appendSec.innerHTML = sec;
  }

  if (sec === 60) {
    mins++;
    appendMin.innerHTML = "0" + mins;
    sec = 0;
    appendSec.innerHTML = "0" + sec;
    tens = 0;
    appendTens.innerHTML = "0" + tens;
  }
};

start.onclick = () => {
  clearInterval(Interval);
  Interval = setInterval(startTimer, 10);
};

stop.onclick = () => {
  clearInterval(Interval);
};

reset.onclick = () => {
  clearInterval(Interval);
  tens = 0;
  sec = 0;
  mins = 0;
  appendTens.innerHTML = "0" + tens;
  appendSec.innerHTML = "0" + sec;
  appendMin.innerHTML = "0" + mins;
};
