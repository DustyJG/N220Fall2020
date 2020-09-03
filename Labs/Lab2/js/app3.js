let xPos = 0;
let xSpeed = 5;

function setup() {
    createCanvas(800, 600);
}

function draw() {
  xPos = xPos + xSpeed;
  circle(0, 200, 30); 
}