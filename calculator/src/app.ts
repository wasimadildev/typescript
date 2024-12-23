const display: HTMLInputElement | null = document.querySelector("#display");
const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll(".btn");

let currentInput: string = "";
let operator: string = "";
let firstOperand: string = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (!value || !display) return;

   
    if (value === "C") {
      currentInput = "";
      operator = "";
      firstOperand = "";
      display.value = "";
      return;
    }

    if (value === "=") {
      if (firstOperand && operator && currentInput) {
        const result = calculate(
          parseFloat(firstOperand),
          parseFloat(currentInput),
          operator
        );
        display.value = result.toString();
        currentInput = result.toString();
        firstOperand = "";
        operator = "";
      }
      return;
    }

  
    if (["+", "-", "*", "/"].indexOf(value) !== -1) {
        if (currentInput && !operator) {
          firstOperand = currentInput;
          operator = value;
          currentInput = "";
        }
        return;
      }

    
    currentInput += value;
    display.value = currentInput;
  });
});


function calculate(a: number, b: number, operator: string): number | string {
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
