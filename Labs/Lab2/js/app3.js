let xPos = 0;
let xSpeed = 5;

function setup() {
    createCanvas(800, 600);
}

function draw() {
  noStroke
 xPos = xPos + xSpeed;
  circle(0, 200, 30);
}
if (xPos >= 800) {
  else {
    (xPos = 0);
}