const display = document.getElementById('display');
const numberButtons = document.querySelectorAll(".btn_calcul");
const operationButtons = document.querySelectorAll(".operation");
const calculateButton = document.getElementById("btn_print");

let currentValue = '';
let firstValue = '';
let operator = '';
let isNewInput = true;

numberButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        if (isNewInput){
            display.textContent = button.value;
            isNewInput = false;
        } else{
            display.textContent += button.value
        }
        currentValue += button.value
    })
})

operationButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        if(currentValue){
            if(firstValue === ''){
                firstValue = currentValue;
            } else if (operator){
                firstValue = calculate(firstValue, currentValue, operator);
                display.textContent = firstValue;
            }
        }
        operator = button.value;
        currentValue = '';
        isNewInput = true;
    });
});

calculateButton.addEventListener('click', () =>{
    if (firstValue && currentValue && operator){
        const result = calculate(firstValue, currentValue, operator);
        display.textContent = result;
        firstValue = result.toString();
        currentValue = '';
        operator = '';
        isNewInput = true;
    }
});

function calculate(a, b, operator) {
    const num1 = parseFloat(a);
    const num2 = parseFloat(b);
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return 0;
    }
}
