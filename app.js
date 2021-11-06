// import functions and grab DOM elements
import { add, subtract, multiply, divide, exp } from './math-utils.js';
// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

  // get first input from the DOM
  // get second input from the DOM
  // grab the button
  // grab the empty div to inject result into

function setupOperation(id, operation) {
    const input1 = document.getElementById('input-1');
    const input2 = document.getElementById('input-2');
    const button = document.getElementById(`click-${id}`);
    const displayResult = document.getElementById('display-result');
    
    button.addEventListener('click', () => {
        const num1 = +input1.value;
        const num2 = +input2.value;
        const result = operation(num1, num2);
        displayResult.textContent = result;
    });
}
setupOperation('add', add);
setupOperation('subtract', subtract);
setupOperation('multiply', multiply);
setupOperation('divide', divide);
setupOperation('exp', exp);