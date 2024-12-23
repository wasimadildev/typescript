"use strict";
var display = document.querySelector("#display");
var buttons = document.querySelectorAll(".btn");
var currentInput = "";
var operator = "";
var firstOperand = "";
buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        var value = button.getAttribute("data-value");
        if (!value || !display)
            return;
        // Handle clear button
        if (value === "C") {
            currentInput = "";
            operator = "";
            firstOperand = "";
            display.value = "";
            return;
        }
        // Handle equal button
        if (value === "=") {
            if (firstOperand && operator && currentInput) {
                var result = calculate(parseFloat(firstOperand), parseFloat(currentInput), operator);
                display.value = result.toString();
                currentInput = result.toString();
                firstOperand = "";
                operator = "";
            }
            return;
        }
        // Handle operator buttons
        if (["+", "-", "*", "/"].indexOf(value) !== -1) {
            if (currentInput && !operator) {
                firstOperand = currentInput;
                operator = value;
                currentInput = "";
            }
            return;
        }
        // Handle number and dot input
        currentInput += value;
        display.value = currentInput;
    });
});
// Calculation function
function calculate(a, b, operator) {
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            if (b === 0) {
                return "Error: Division by zero";
            }
            return a / b;
        default:
            return "Invalid operation";
    }
}
