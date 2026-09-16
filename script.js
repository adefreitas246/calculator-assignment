function addNumbers(num1, num2) {
    return num1 + num2;
}

function subtractNumbers(num1, num2) {
    return num1 - num2;
}

function multiplyNumbers(num1, num2) {
    return num1 * num2;
}

function divideNumbers(num1, num2) {
    return num1 / num2;
}

function operate(operation, num1, num2) {
    switch (operation) {
        case '+':
            return addNumbers(num1, num2);
        case '-':
            return subtractNumbers(num1, num2);
        case '*':
            return multiplyNumbers(num1, num2);
        case '/':
            return divideNumbers(num1, num2);
        default:
            return null;
    }
}

operation = prompt("Enter an operation (+, -, *, /):");
num1 = parseFloat(prompt("Enter the first number:"));
num2 = parseFloat(prompt("Enter the second number:"));

result = operate(operation, num1, num2);
if (result !== null) {
    alert(num1 + " " + operation + " " + num2 + " = " + result);
} else {
    alert("Invalid operation.");
}
