var score = 0;

postToPage(score); // Print to the page


createButton('Button', btnPress);
createButton('- Button', btnPress2); // Make a button
changeTitle('Clicker Game');

setInterval(btnPress, 1000);
setInterval(btnPress2, 1000);

function btnPress() {
  score++;
  postToPage(score);
}

function btnPress2() {
  score--;
  postToPage(score);
}
