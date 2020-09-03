let xPos = 0;
let yPos = 0;

function setup() {
    createCanvas(400, 300);
}
function draw() {
    background(30, 200, 30)
}

let value = 0;
function draw() {
  fill(value);
}

circle(xPos, yPos, 30,);

function mouseMoved() {
  value = value + 1;
  if (value > 255) {
    value = 0;
  }
}