let xPos = 0;
let xSpeed = 5;

function setup() {
    createCanvas(800, 600);
}

function draw() {
  background(255)
  xPos = xPos + xSpeed;

  var myBool = xPos > 795;
  console.log(myBool);

  circle(xPos, 200, 30);
}