var score = 0;
var warm = 10;

var title = new Title('Forrest'); // Create a title element
var button = new Button('Wood', btnPress);   // Create a button element
var hidden = new Button('Build Fire', buttonPress);




hidden.hide();
var scr = new Text(score);                    // Create a text element
var wrm = new Text(warm);

var warmm = new Button('Heat', heat);
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
 warm=warm+25;
}

var loop = setInterval(warm, 1000); // Run the "createButton" function once every 1000 milliseconds (once every second)

function createButton() {
  let heat = new Button('hello!');
}

function stopLoop() {
  clearInterval(loop);
}

function heat() {
 warm--;
 wrm.edit(warm);

}




function buttonWorld() {
  score--;
  postToPage(score);
}
