const keypadBtn = document.querySelectorAll(".keypad-btn");
const displayTextarea = document.querySelector(".display textarea");
let store = "";

keypadBtn.forEach((element) => {
  element.addEventListener("click", () => {
    let value = element.textContent;

    if (
      value !== "AC" &&
      value !== "C" &&
      value !== "+" &&
      value !== "-" &&
      value !== "*" &&
      value !== "/" &&
      value !== "↺" &&
      value !== "="
    ) {
      displayTextarea.value += value;
    } else if (
      value === "+" ||
      value === "-" ||
      value === "*" ||
      value === "/"
    ) {
      let ele = displayTextarea.value;
      let lastEle = ele.charAt(ele.length - 1);
      if (lastEle === "" && value === "-") {
        displayTextarea.value += "-";
      }
      if (/\d/.test(lastEle)) {
        displayTextarea.value += value;
      }
    } else if (value === "AC") {
      allCancel();
    } else if (value === "C") {
      backspace();
    } else if (value === "↺") {
      seeHistory();
    } else if (value === "=") {
      calculate(displayTextarea.value);
    }
  });
});

// action btn functions
function allCancel() {
  displayTextarea.value = "";
}
function backspace() {
  let length = displayTextarea.value.length;
  displayTextarea.value = displayTextarea.value.substring(0, length - 1);
}
function seeHistory() {
  displayTextarea.value = store;
}
function calculate(value) {
  store = value;
  let trimmers = displayTextarea.value;
  let result = trimmers.replace(/\b0+(\d+)/g, '$1')
  result = eval(result);
  result = parseFloat(result.toFixed(6));
  displayTextarea.value = result;
}

document.addEventListener("keydown", (e) => {
  let key = e.key;
  let ele = displayTextarea.value;

  let lastEle = ele.charAt(ele.length - 1);

  function operatorsCheck() {
    if (/\d/.test(lastEle)) {
      displayTextarea.value += key;
    }
    keypadBtn[19].focus();
  }
  
  switch (key) {
    case "0":
      displayTextarea.value += key;
      break;
    case "1":
      displayTextarea.value += key;
      break;
    case "2":
      displayTextarea.value += key;
      break;
    case "3":
      displayTextarea.value += key;
      break;
    case "4":
      displayTextarea.value += key;
      break;
    case "5":
      displayTextarea.value += key;
      break;
    case "6":
      displayTextarea.value += key;
      break;
    case "7":
      displayTextarea.value += key;
      break;
    case "8":
      displayTextarea.value += key;
      break;
    case "9":
      displayTextarea.value += key;
      break;
    case ".":
      displayTextarea.value += key;
      break;
    case "+":
      operatorsCheck();
      break;
    case "-":
      operatorsCheck();
      break;
    case "*":
      operatorsCheck();
      break;
    case "/":
      operatorsCheck();
      break;
    case "Backspace":
      backspace();
      break;
    case "=":
      calculate(displayTextarea.value);
      break;
    case "Enter":
      calculate(displayTextarea.value);
      break;

    default:
      break;
  }
});
