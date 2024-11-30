const buttons = document.querySelectorAll('.btn')
const screenContent = document.getElementById('screen-content')
const clrBtn = document.getElementById('clr-btn')
const undoBtn = document.getElementById('undo-btn')
const equalBtn = document.getElementById('equals')
let resultDisplayed = false

if (resultDisplayed == false) screenContent.textContent = ''

buttons.forEach((button) => {
    button.addEventListener('click', function(ev) { 
        console.log(ev.target.getAttribute('data-value'))
        let input = ev.target.getAttribute('data-value')
        let operators = ['x', '*', '-', '/']
        console.log(input)
        screenContent.textContent += input
    })
})

equalBtn.addEventListener('click', equals)

clrBtn.addEventListener('click', function() {
    screenContent.textContent = ''
})

undoBtn.addEventListener('click', function() {
    screenContent.textContent = screenContent.textContent.slice(0, -1)
})

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function makeCalc(num1, num2, operator) {
    switch (operator) {
        case '+':
            result = add(num1, num2)
            break;
        case '-':
            result = subtract(num1, num2)
            break;
        case '*':
            result = multiply(num1, num2)
            break
        case '/':
            if (num2 == 0) {
                return screenContent.textContent = `No you can't do that`
            }
            result = divide(num1, num2)
            break;
        default:
            result = 'Error';
    }
    resultDisplayed = true
    return result
}

function equals() {
    let input = screenContent.textContent.trim()
    let parts = input.split(' ')
    console.log(parts)
    if ( parts.length === 0 ) {
        return
    } else if (parts.length === 1 || (parts.length === 2)) {
        console.log(parts[0])
        screenContent.textContent = `${parts[0]}`
        resultDisplayed = true
    } else {
        let num1 = parseFloat(parts[0])
        let operator = parts[1]
        let num2 = parseFloat(parts[2])
    
        result = makeCalc(num1, num2, operator)
        screenContent.textContent = result
    }
}

