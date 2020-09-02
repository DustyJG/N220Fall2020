let xPos = 0;
let yPos = 40;

let xSpeed = 2;
let ySpeed = 0;

function setup() {
    createCanvas(400, 300);
}

function draw() {
    background(0, 255, 0)
    xPos = xPos + xSpeed;
    yPos = yPos + ySpeed;

    fill(0, 0, 255);

    if( xPos > 164 ) {
        fill (255, 0, 0);
    }

        circle(xPos, yPos, 30);
}