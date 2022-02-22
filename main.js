import "./style.css";

const title = "Calculator";

document.querySelector("#app").innerHTML = `
  <h1>${title}</h1>
  <div id="calculator">
    <div id="screen">
      <span id="resultScreen">0</span>
    </div>
    <div id="buttons">
      <button id="7" class="button">7</button>
      <button id="8" class="button">8</button>
      <button id="9" class="button">9</button>
      <button id="-" class="button">-</button>
      <button id="4" class="button">4</button>
      <button id="5" class="button">5</button>
      <button id="6" class="button">6</button>
      <button id="+" class="button">+</button>
      <button id="1" class="button">1</button>
      <button id="2" class="button">2</button>
      <button id="3" class="button">3</button>
      <button id="=" class="button">=</button>
      <button id="0" class="button">0</button>
      <button id="*" class="button">*</button>
      <button id="/" class="button">/</button>
      <button id="c" class="button">C</button>

    </div>
  </div>
`;

let num1 = 0;
let num2 = 0;
let operator = "";
let string = "";
let result;

const resultScreen = document.querySelector("#resultScreen");

const buttons = document.querySelectorAll("button");

const doMath = (content) => {
  const opPosition = content.indexOf(operator);
  num1 = parseFloat(content.substring(0, opPosition));
  num2 = parseFloat(content.substring(opPosition + 1, content.length - 1));

  if (operator === "+") {
    result = num1 + num2;
    return result;
  } else if (operator === "-") {
    result = num1 - num2;
    return result;
  } else if (operator === "*") {
    result = num1 * num2;
    return result;
  } else {
    result = num1 / num2;
    return result;
  }
};

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (event) => {
    string += event.target.innerHTML;
    if (
      buttons[i].textContent === "+" ||
      buttons[i].textContent === "-" ||
      buttons[i].textContent === "/" ||
      buttons[i].textContent === "*"
    ) {
      operator = buttons[i].textContent;
      resultScreen.innerHTML += event.target.innerHTML;
    } else {
      if (buttons[i].textContent === "=") {
        resultScreen.innerHTML = String(doMath(string));
        string = String(result);

        return;
      }

      resultScreen.innerHTML += event.target.innerHTML;
    }

    if (buttons[i].textContent === "C") {
      resultScreen.innerHTML = "0";
      operator = "";
      num1 = 0;
      num2 = 0;
      string = "";
    }
  });
}
