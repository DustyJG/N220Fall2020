let xPos = 0;
let yPos = 0;

let xSpeed = 0;
let ySpeed = 0;

function setup() {
    createCanvas(400, 300);
}

function draw() {
    background(30, 200, 30)
    xPos = xPos + xSpeed;
    yPos = yPos + ySpeed;

    if( xPos > 165 ) {
        fill (200, 30, 30);
    }   else {
        fill (30, 30, 200);
    }

        circle(xPos, yPos, 30);
}