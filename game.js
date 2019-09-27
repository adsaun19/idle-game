var score = 0;
var warm = 10;

var title = new Title('Forrest'); // Create a title element
var text = new Text('Dont let heat = 0')
var button = new Button('Wood', btnPress);   // Create a button element
var hidden = new Button('Build Fire (-10)', buttonPress);
var food = new Button('Get Food')



hidden.hide();
var scr = new Text(score);
var wrm = new Text(warm);

var warmm = new Button('Heat');


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

var loop = setInterval(heat, 1000);



function stopLoop() {
  clearInterval(loop);
}


function heat() {
 warm--;
 wrm.edit(warm);
 if(warm < 0){
 title.edit('Game Over');
 button.remove();
 warmm.remove();
 hidden.remove();
 food.remove()
 }

}

function buttonWorld() {
  score--;
  postToPage(score);
}
