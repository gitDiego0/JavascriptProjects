import "./style.css";

const title = "What time is it?";

document.querySelector("#app").innerHTML = `
  <h1>${title}</h1>
  <div id="time">
    <span id="hour">00</span>
    <span> : </span>
    <span id="minutes">00</span>
    <span> : </span>
    <span id="seconds">00</span>
    <span id="dayTime"></span>
  </div>
`;

let hour = 0;
let minutes = 0;
let seconds = 0;

const appendHours = document.querySelector("#hour");
const appendMinutes = document.querySelector("#minutes");
const appendSeconds = document.querySelector("#seconds");
const dayTime = document.querySelector("#dayTime");

const clock = () => {
  const time = new Date();
  hour = time.getHours();
  minutes = time.getMinutes();
  seconds = time.getSeconds();

  hour = hour < 10 ? "0" + hour : hour;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  appendHours.innerHTML = hour;
  appendMinutes.innerHTML = minutes;
  appendSeconds.innerHTML = seconds;

  if (hour < 12) {
    dayTime.innerHTML = "AM";
  } else {
    dayTime.innerHTML = "PM";
  }

  setTimeout(clock, 1000);
};

clock();
