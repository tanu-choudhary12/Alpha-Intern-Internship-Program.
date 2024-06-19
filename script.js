document.addEventListener('DOMContentLoaded', function () {
    let calculatorDisplay = document.querySelector('.calculator-display');
    let calculatorButtons = document.querySelectorAll('.btn');
    let expression = '';
  
    calculatorButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        handleButtonPress(btn.innerText);
      });
    });
  
    window.addEventListener('keydown', function (event) {
      const key = event.key;
      const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.', 'Enter', 'Backspace', 'Delete', 'c', 'C'];
      if (allowedKeys.includes(key)) {
        handleButtonPress(key);
      }
    });
  
    function handleButtonPress(btnValue) {
      if (btnValue === 'C') {
        resetCalculator();
      } else if (btnValue === 'DEL' || btnValue === 'Backspace') {
        deleteLastChar();
      } else if (btnValue === '=' || btnValue === 'Enter') {
        performCalculation();
      } else {
        updateDisplay(btnValue);
      }
    }
  
    function resetCalculator() {
      calculatorDisplay.textContent = "";
      expression = '';
    }
  
    function deleteLastChar() {
      expression = expression.slice(0, -1);
      calculatorDisplay.textContent = expression;
    }
  
    function updateDisplay(value) {
      expression += value;
      calculatorDisplay.textContent = expression;
    }
  
    function performCalculation() {
      if (expression === '') {
        calculatorDisplay.textContent = 'Error';
        return;
      }
  
      try {
        let result = eval(expression);
        result = parseFloat(result.toFixed(5));
        calculatorDisplay.textContent = result;
        expression = result.toString();
      } catch (error) {
        calculatorDisplay.textContent = 'Error';
        expression = '';
      }
    }
  });