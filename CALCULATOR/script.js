let display = document.getElementById('display');
let currentOperand = '';
let previousOperand = '';
let operator = null;

function appendNumber(number) {
    if (currentOperand.includes('.') && number === '.') return;
    if (currentOperand === '0' && number !== '.') currentOperand = '';
    currentOperand += number;
    updateDisplay();
}

function updateDisplay() {
    display.innerText = currentOperand || '0';
}

function chooseOperator(selectedOperator) {
    if (currentOperand === '') return;
    if (previousOperand !== '') calculate();
    operator = selectedOperator;
    previousOperand = currentOperand;
    currentOperand = '';
}

function calculate() {
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
            break;
        default:
            return;
    }
    
    currentOperand = computation;
    operator = null;
    previousOperand = '';
    updateDisplay();
}

function clearDisplay() {
    currentOperand = '';
    previousOperand = '';
    operator = null;
    updateDisplay();
}
