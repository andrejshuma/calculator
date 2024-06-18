

let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = "";
let display = document.querySelector('.display');
let displayValue = '';

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}
function operate(operator, a, b) {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default:
            console.error("Invalid operator");
            return;
    }
}

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    if (!button.classList.contains('operator') && !button.classList.contains('clear') && !button.classList.contains('equal')) {
        button.addEventListener('click', () => {
            if(button.textContent === '.' && displayValue.includes('.')) {
                return;
            }
            displayValue += button.textContent;
            display.value = displayValue;
        });
    } else if (button.classList.contains('operator')) {
        button.addEventListener('click', () => {
            if (firstNumber && operator) {
                secondNumber = displayValue;
                result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
                display.value = result;
                displayValue = result.toString();
            }
            firstNumber = displayValue;
            operator = button.textContent;
            displayValue = '';
        });
    } else if (button.classList.contains('equal')) {
        button.addEventListener('click', () => {
            if (!firstNumber  ||!operator) {
                return;
            }
            secondNumber = displayValue;
            result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
            display.value = result;
            displayValue = result.toString();
            firstNumber = '';
            operator = '';
        });
    } else if (button.classList.contains('clear')) {
        button.addEventListener('click', clear);
    
    }
});

function clear() {
    displayValue = "";
    firstNumber = "";
    secondNumber = "";
    operator = "";
    result = "";
    display.value = "0";
}
function divide(a, b) {
    if (b === 0) {
        console.error("Cannot divide by zero");
        return;
    }
    return a / b;
}




