var score = 0; // Create a variable to store the score in

var title = new Title('Clicker'); // Create a title element
var button = new Button('Button', btnPress);   // Create a button element
var hidden = new Button('Hello!');
var button1 = new Button('-button', buttonPress)


hidden.hide();
var scr = new Text(score);                    // Create a text element

  // Set up a loop

function btnPress() {
  score++;     // Increase the score
  scr.edit(score); // Update the page with the new score
  if(score > 10) {
    hidden.show();
  }
  if(score > 15) {
    hidden.hide(500);
  }
}

function buttonPress() {
 score--;
}



function buttonWorld() {
  score--;
  postToPage(score);
}

var text = new Text ('Press the button to make the number go up or down.');

  if (score > 10){
  var text = new Text ('Ten');
}
if (score > 100){
var text = new Text ('One Hundred');
}
