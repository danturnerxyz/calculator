const buttons = document.querySelectorAll('.btn')
const screenContent = document.getElementById('screen-content')
const clrBtn = document.getElementById('clr-btn')
const undoBtn = document.getElementById('undo-btn')
const equals = document.getElementById('equals')

buttons.forEach((button) => {
    button.addEventListener('click', function(ev) {
        console.log(ev.target.getAttribute('data-value'))
        screenContent.textContent += `${ev.target.getAttribute('data-value')}`
    })
})

function operate(numA, operator, numB) {
    
}

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

