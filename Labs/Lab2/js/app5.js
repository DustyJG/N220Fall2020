let xPos = 400;
let yPos = 300;
let xSpeed = 1;
var startX = 0;

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(255)

startX = startX + 1;

circle(xPos, yPos, startX);

if( startX > 400 ) {
    startX = 0;
    
}