let xPos = 0;
let yPos = 0:

function setup() {
    createCanvas(400, 300);
}

function draw() {
    xPos = xPos + 2;
    yPos = yPos + 1;
    circle(xPos, yPos, 30);
}