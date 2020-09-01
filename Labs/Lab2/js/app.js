let xPos = 0;
let yPos = 0;

let xSpeed = 1;
let ySpeed = 1;

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(62, 237, 108);
    xPos = xPos + xSpeed;
    yPos = yPos + ySpeed;
    fill(19, 71, 26);
    circle(xPos, yPos, 30);
}