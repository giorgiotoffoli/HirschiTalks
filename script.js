let innocenceValue;
let finalScore = 101;
var test = document.forms['test'];

function calcScore() {
  innocenceValue = document.querySelectorAll('input[type=checkbox]:checked');
  finalScore -= innocenceValue.length;
  console.log(finalScore);
  localStorage.setItem('finalScore', finalScore);
}
