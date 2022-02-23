import "./style.css";

document.querySelector("#app").innerHTML = `
  <h1>Guess Color Game</h1>
  <div id="screen">
    <div id="header">
      <span id="colorCode"></span>
      <div id="navbar">
        <span id="newgame">NEW GAME</span>
        <span id="easy">EASY</span>
        <span id="hard">HARD</span>
      </div>
    </div>
    <div id="gameBoard"></div>
    <span id="gameResult"></span>
  </div>
`;

let colorCode;
let lifes;
let difficulty;

const gameResult = document.querySelector("#gameResult");

const rgbNumber = 256;

const newGame = document.querySelector("#newgame");
newGame.addEventListener("click", () => {
  startGame();
});

const gameBoard = document.querySelector("#gameBoard");

const randomNumber = (cuantity) => {
  const number = Math.floor(Math.random() * cuantity);

  return number;
};

const startGame = () => {
  const colorCodes = [{}];
  gameBoard.innerHTML = "";
  gameResult.innerHTML = "";
  colorCode = {
    r: randomNumber(rgbNumber),
    g: randomNumber(rgbNumber),
    b: randomNumber(rgbNumber),
  };
  const positionColorSelected = randomNumber(5);
  console.log(colorCode);
  // console.log(positionColorSelected);
  for (let i = 0; i < 6; i++) {
    if (i === positionColorSelected) {
      gameBoard.innerHTML += `<div id="${i}" class="colorBox" style="background-color:rgb(${colorCode.r},${colorCode.g},${colorCode.b})"><span style="display:none;">r=${colorCode.r} g=${colorCode.g} b=${colorCode.b}</span></div>`;
      colorCodes.push({
        color: {
          r: colorCode.r,
          g: colorCode.g,
          b: colorCode.b,
        },
        positon: i,
      });
    } else {
      const r = randomNumber(rgbNumber);
      const g = randomNumber(rgbNumber);
      const b = randomNumber(rgbNumber);
      gameBoard.innerHTML += `<div id="${i}" class="colorBox" style="background-color:rgb(${r},${g},${b})"><span style="display:none;">r=${r} g=${g} b=${b}</span></div>`;
      colorCodes.push({
        color: {
          r: r,
          g: g,
          b: b,
        },
        positon: i,
      });
    }
  }
  // console.table(colorCodes);

  const colorBoxes = document.querySelectorAll(".colorBox");
  for (let x = 0; x < colorBoxes.length; x++) {
    colorBoxes[x].addEventListener("click", () => {
      const content = {
        r: getNumbers("r", colorBoxes[x].textContent),
        g: getNumbers("g", colorBoxes[x].textContent),
        b: getNumbers("b", colorBoxes[x].textContent),
      };

      if (
        content.r === colorCode.r &&
        content.g === colorCode.g &&
        content.b === colorCode.b
      ) {
        gameResult.innerHTML = "YOU WIN";
      }
      console.log(content);
    });
  }
};

const getNumbers = (letter, code) => {
  const letterPosition = code.search(letter);
  const number = code.substr(letterPosition + 2, 3);
  return parseInt(number);
};
