const numButtons = document.querySelectorAll('.num');
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.querySelector('.clear');
const equalsButton = document.querySelector('.equals');
const solutionDisp = document.querySelector('.screen-right');
let equationDisp = document.querySelector('.screen-left');



let num1 = '';
let num2 = '';
let operator = '';
let result = '';
let operatorSet = false;
let operationDone = false;


// number buttons clicked even

numButtons.forEach((numButton) => {
    numButton.addEventListener('click', (e) => {
        if (operationDone) {
            solutionDisp.textContent = 'Error';
            equationDisp.textContent = '';
        }

        else {
            if (!operatorSet) {
                num1 += e.target.value;
                solutionDisp.textContent = num1;
            }
            else {
                num2 += e.target.value;
                solutionDisp.textContent = num2;
            }
        }
    });
});


// operator buttons clicked

operatorButtons.forEach((operatorButton) => {


    operatorButton.addEventListener('click', (e) => {
        if (operationDone) {
            solutionDisp.textContent = 'Error';
            equationDisp.textContent = '';

        }
        else {
            operator = e.target.innerText;
            solutionDisp.textContent = operator;
            operatorSet = true;

        }

    });
})


// the equals button is clicked

equalsButton.addEventListener('click', (e) => {
    if (operator === '+') {
        result = add(num1, num2);
        display(num1, num2, operator, result);
    }
    else if (operator === '-') {
        result = subtract(num1, num2);
        display(num1, num2, operator, result);
    }
    else if (operator === '/') {
        result = divide(num1, num2);
        display(num1, num2, operator, result);
    }
    else if (operator === 'X') {
        result = multiply(num1, num2);
        display(num1, num2, operator, result);
    }
});


// when clear button clicked

clearButton.addEventListener('click', () => {

    num1 = '';
    num2 = '';
    operator = '';
    result = '';
    operatorSet = false;
    operationDone = false;
    solutionDisp.textContent = '';
    equationDisp.textContent = '';
});


// Display Function
function display(num1, num2, operator, result) {
    equationDisp.textContent = `${num1} ${operator} ${num2}`;
    solutionDisp.textContent = result;
    operationDone = true;
}

// Maths functions
function add(num1, num2) {
    return Number(num1) + Number(num2);
}

function subtract(num1, num2) {
    return Number(num1) - Number(num2);
}

function multiply(num1, num2) {
    return Number(num1) * Number(num2);
}

function divide(num1, num2) {
    if (num2 === '0') {
        return 'Error';
    }
    else {
        return Math.round((Number(num1) / Number(num2)) * 100) / 100;
    }
}