var score = 0; // Create a variable to store the score in

var title = new Title('Forrest'); // Create a title element
var button = new Button('Wood', btnPress);   // Create a button element
var hidden = new Button('Build Fire', buttonPress);



hidden.hide();
var scr = new Text(score);                    // Create a text element

  // Set up a loop

function btnPress() {
  score = score + 1;     // Increase the score
  scr.edit(score); // Update the page with the new score
  if(score > 10) {
    hidden.show();
  }
  if(score < 10) {
    hidden.hide(500);
  }
}

function buttonPress() {
 score=score-10;
 scr.edit(score);
 if(score < 10) {
   hidden.hide(500);
 }
}




function buttonWorld() {
  score--;
  postToPage(score);
}
