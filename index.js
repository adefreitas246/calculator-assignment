// Basic calculations.
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return null;
    }

    return a / b;
}

function operate(operator, a, b) {
    if (operator === '+') {
        return add(a, b);
    }

    if (operator === '-') {
        return subtract(a, b);
    }

    if (operator === '*') {
        return multiply(a, b);
    }

    if (operator === '/') {
        return divide(a, b);
    }
}

// Values the calculator needs to remember.
const display = document.getElementById('display');
let displayValue = '0';
let firstNumber = null;
let operator = null;
let waitingForNumber = false;

function updateDisplay() {
    display.textContent = displayValue;
}

function inputNumber(number) {
    if (displayValue === 'Divide by zero') {
        clearCalculator();
    }

    if (waitingForNumber) {
        displayValue = number;
        waitingForNumber = false;
    } else if (displayValue === '0') {
        displayValue = number;
    } else {
        displayValue += number;
    }

    updateDisplay();
}

function inputDecimal() {
    if (waitingForNumber) {
        displayValue = '0.';
        waitingForNumber = false;
    } else if (!displayValue.includes('.')) {
        displayValue += '.';
    }

    updateDisplay();
}

function selectOperator(nextOperator) {
    if (displayValue === 'Divide by zero') {
        return;
    }

    const currentNumber = Number(displayValue);

    if (operator && !waitingForNumber) {
        const result = operate(operator, firstNumber, currentNumber);

        if (result === null) {
            showDivideError();
            return;
    }

        displayValue = roundResult(result);
        firstNumber = Number(displayValue);
        updateDisplay();
    } else {
        // Use the displayed number when starting a new calculation.
        firstNumber = currentNumber;
    }

    operator = nextOperator;
    waitingForNumber = true;
}

function calculate() {
    if (operator === null || waitingForNumber) {
        return;
    }

    const result = operate(operator, firstNumber, Number(displayValue));

    if (result === null) {
        showDivideError();
        return;
    }

    displayValue = roundResult(result);
    firstNumber = Number(displayValue);
    operator = null;
    waitingForNumber = true;
    updateDisplay();
}

function roundResult(number) {
    return Number(number.toPrecision(10)).toString();
}

function showDivideError() {
    displayValue = 'Divide by zero';
    firstNumber = null;
    operator = null;
    waitingForNumber = true;
    updateDisplay();
}

function clearCalculator() {
    displayValue = '0';
    firstNumber = null;
    operator = null;
    waitingForNumber = false;
    updateDisplay();
}

function backspace() {
    if (waitingForNumber) {
        return;
    }

    if (displayValue.length > 1) {
        displayValue = displayValue.slice(0, -1);
    } else {
        displayValue = '0';
    }

    updateDisplay();
}

// Keyboard controls.
document.addEventListener('keydown', event => {
    // Leave browser shortcuts, such as Ctrl + 0, alone.
    if (event.ctrlKey || event.metaKey || event.altKey) {
        return;
    }

    if (/^[0-9]$/.test(event.key)) {
        inputNumber(event.key);
    } else if (event.key === '.') {
        inputDecimal();
    } else if (['+', '-', '*', '/'].includes(event.key)) {
        selectOperator(event.key);
    } else if (event.key === 'Enter' || event.key === '=') {
        calculate();
    } else if (event.key === 'Backspace') {
        backspace();
    } else if (event.key === 'Escape') {
        clearCalculator();
    } else {
        return;
    }

    // Avoid also activating a focused button when Enter is pressed.
    event.preventDefault();
});