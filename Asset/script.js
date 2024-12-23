let displayValue = "";
let operation = null;
let previousValue = null;

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function setOperation(op) {
    if (displayValue === "") return;
    if (previousValue !== null) calculateResult();
    operation = op;
    previousValue = parseFloat(displayValue);
    displayValue = "";
}

function calculateResult() {
    if (operation === null || displayValue === "") return;
    const currentValue = parseFloat(displayValue);
    let result;
    switch (operation) {
        case "+":
            result = previousValue + currentValue;
            break;
        case "-":
            result = previousValue - currentValue;
            break;
        case "*":
            result = previousValue * currentValue;
            break;
        case "/":
            result = currentValue === 0 ? "Error" : previousValue / currentValue;
            break;
        default:
            return;
    }
    if (result !== "Error") {
        addToHistory(`${previousValue} ${operation} ${currentValue} = ${result}`);
    }
    displayValue = result;
    operation = null;
    previousValue = null;
    updateDisplay();
}

function calculatePercentage() {
    if (displayValue === "") return;
    displayValue = (parseFloat(displayValue) / 100).toString();
    updateDisplay();
}

function calculateSquareRoot() {
    if (displayValue === "") return;
    const value = parseFloat(displayValue);
    if (value < 0) {
        displayValue = "Error";
    } else {
        displayValue = Math.sqrt(value).toString();
    }
    updateDisplay();
}

function clearDisplay() {
    displayValue = "";
    updateDisplay();
}

function clearEverything() {
    displayValue = "";
    operation = null;
    previousValue = null;
    document.getElementById("history").innerHTML = ""; // Clear history
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("display").value = displayValue;
}

function addToHistory(entry) {
    const history = document.getElementById("history");
    const div = document.createElement("div");
    div.textContent = entry;
    div.classList.add("history-item");
    history.appendChild(div);
}
