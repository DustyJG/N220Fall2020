let xPos = 400;
let yPos = 300;
let xSpeed = 1;
let startX = 0;

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(255)

startX++;

circle(xPos, yPos, startX);

if( startX = 200 ) {
    startX = 0;
}