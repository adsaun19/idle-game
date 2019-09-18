var score = 0; // Create a variable to store the score in

var title = new Title('Welcome to the Game'); // Create a title element
var button = new Button('Button', btnPress);   // Create a button element
var hidden = new Button('Hello!');


hidden.hide();
var scr = new Text(score);                    // Create a text element

setInterval(btnPress, 1000);   // Set up a loop

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

function increment() {
  score++;
}

function buttonWorld() {
  score--;
  postToPage(score);
}

var text = new Text ('Press the button to make the number go up.');

  if (score > 10){
  var text = new Text ('Ten');
}
if (score > 100){
var text = new Text ('One Hundred');
}
