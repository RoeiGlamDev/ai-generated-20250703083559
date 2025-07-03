// Get the display element
const display = document.getElementById('display');

// Get the buttons
const buttons = document.querySelectorAll('button');

// Initialize the calculator state
let currentNumber = '';
let previousNumber = '';
let operator = '';

// Function to handle button clicks
function handleButtonClick(event) {
  const button = event.target;
  const value = button.dataset.value;

  // Handle number buttons
  if (button.classList.contains('number')) {
    currentNumber += value;
    display.value = currentNumber;
  }

  // Handle operator buttons
  if (button.classList.contains('operator')) {
    if (value === '=') {
      // Calculate the result
      const result = calculateResult();
      display.value = result;
      currentNumber = result;
      previousNumber = '';
      operator = '';
    } else {
      previousNumber = currentNumber;
      currentNumber = '';
      operator = value;
    }
  }

  // Handle clear button
  if (button.classList.contains('clear')) {
    currentNumber = '';
    previousNumber = '';
    operator = '';
    display.value = '';
  }
}

// Function to calculate the result
function calculateResult() {
  let result;
  switch (operator) {
    case '+':
      result = parseFloat(previousNumber) + parseFloat(currentNumber);
      break;
    case '-':
      result = parseFloat(previousNumber) - parseFloat(currentNumber);
      break;
    case '*':
      result = parseFloat(previousNumber) * parseFloat(currentNumber);
      break;
    case '/':
      result = parseFloat(previousNumber) / parseFloat(currentNumber);
      break;
    default:
      result = 0;
  }
  return result.toString();
}

// Add event listeners to the buttons
buttons.forEach(button => {
  button.addEventListener('click', handleButtonClick);
});