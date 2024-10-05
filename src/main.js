/*
* Main Game Object
* Relies on myCanvas in index.html
* Constantly draws to the canvas using the standard canvas api
*/

var canvas = document.getElementById("myCanvas");
var width = canvas.width;
var height = canvas.height;
var ctx = canvas.getContext("2d"); // probably check if this is null

// Draw the character, given a rectangle of size width, height starting at the top left point x, y
function drawCharacter(x, y, width, height) {
  // Calculate dimensions for the body parts
  const headHeight = height * 0.2;
  const bodyHeight = height * 0.3;
  const armHeight = bodyHeight;
  const legHeight = bodyHeight;
  const armWidth = width * 0.2;
  const legWidth = width * 0.2;

  // Draw head
  ctx.fillStyle = 'blue';
  ctx.fillRect(x + width * 0.4, y, width * 0.2, headHeight);

  // Draw body
  ctx.fillStyle = 'green';
  ctx.fillRect(x + width * 0.3, y + headHeight, width * 0.4, bodyHeight);

  // Draw arms
  ctx.fillStyle = 'red';
  ctx.fillRect(x + width * 0.1, y + headHeight, armWidth, armHeight); // left arm
  ctx.fillRect(x + width * 0.7, y + headHeight, armWidth, armHeight); // right arm

  // Draw legs
  ctx.fillStyle = 'yellow';
  ctx.fillRect(x + width * 0.3, y + headHeight + bodyHeight, legWidth, legHeight); // left leg
  ctx.fillRect(x + width * 0.5, y + headHeight + bodyHeight, legWidth, legHeight); // right leg
}


function draw() {
  // clear the screen
  ctx.clearRect(0, 0, width, height);

  // Character Viewer will take 70% of the screen
  // Selector / Manipulator will take 30% of the screen

  let characterStart = width * 0.3;
  drawCharacter(characterStart,0,width-characterStart,height);

}

setInterval(draw, 10);