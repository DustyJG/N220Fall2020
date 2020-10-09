let xPos = 400;
let yPos = 300;
let startX = 1;

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(200)

startX = startX + 1;

if (startX > 200) {
startX = 1;
}
circle (xPos, yPos, startX);
}
