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
            result = previousValue / currentValue;
            break;
        default:
            return;
    }
    addToHistory(`${previousValue} ${operation} ${currentValue} = ${result}`);
    displayValue = result;
    operation = null;
    previousValue = null;
    updateDisplay();
}

function calculatePercentage() {
    if (displayValue === "") return;
    displayValue = parseFloat(displayValue) / 100;
    updateDisplay();
}

function calculateSquareRoot() {
    if (displayValue === "") return;
    displayValue = Math.sqrt(parseFloat(displayValue));
    updateDisplay();
}

function clearDisplay() {
    displayValue = "";
    updateDisplay();
}

function clearAll() {
    clearDisplay();
    operation = null;
    previousValue = null;
    document.getElementById("history").innerHTML = "";
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