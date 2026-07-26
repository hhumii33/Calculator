currentDisplay= '';
function calculateResult() {
  // 1. Auto-insert '*' between number and opening-bracket
  currentDisplay = currentDisplay.replace(/(\d)\(/g, '$1*(');

  // 2. Auto-insert '*' between closing-bracket and number 
  currentDisplay = currentDisplay.replace(/\)(\d)/g, ')*$1');

  // 3. Evaluate the result and update screen
  currentDisplay = eval(currentDisplay);
  document.querySelector('#display').value = currentDisplay;
}

