const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let lastAnswer = '';
let input = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      input = '';
      display.value = '';
    } 
    else if (value === 'Del') {
      input = input.slice(0, -1);
      display.value = input;
    } 
    else if (value === 'Enter') {
      try {
        const result = eval(input);
        display.value = result;
        lastAnswer = result;
        input = result.toString();
      } catch (error) {
        display.value = 'Error';
      }
    } 
    else if (value === 'Ans') {
      input += lastAnswer;
      display.value = input;
    } 
    else {
      input += value;
      display.value = input;
    }
  });
});