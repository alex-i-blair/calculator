// import functions and grab DOM elements
import { add, subtract, multiply, divide } from './math-utils.js';
// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

  // get first input from the DOM
  // get second input from the DOM
  // grab the button
  // grab the empty div to inject result into
const input1 = document.getElementById('input-1');
const input2 = document.getElementById('input-2');
const clickAdd = document.getElementById('click-add');
const clickSubtract = document.getElementById('click-subtract');
const clickMultiply = document.getElementById('click-multiply');
const clickDivide = document.getElementById('click-divide');
const displayResult = document.getElementById('display-result');

// add an event listener to the button that we grabbed from the DOM
clickAdd.addEventListener('click', () => {
    const num1 = +input1.value;
    const num2 = +input2.value;
    const result = add(num1, num2);
    displayResult.textContent = result;
});

clickSubtract.addEventListener('click', () => {
    const num1 = +input1.value;
    const num2 = +input2.value;
    const result = subtract(num1, num2);
    displayResult.textContent = result;
});

clickMultiply.addEventListener('click', () => {
    const num1 = +input1.value;
    const num2 = +input2.value;
    const result = multiply(num1, num2);
    displayResult.textContent = result;
});

clickDivide.addEventListener('click', () => {
    const num1 = +input1.value;
    const num2 = +input2.value;
    const result = divide(num1, num2);
    displayResult.textContent = result;
});



  // use variable assignment with "+" to make sure they are treated as numbers

  // assign to result variable the output of the math function that we need to import from math-utils.js

  // the change textContent of the result div