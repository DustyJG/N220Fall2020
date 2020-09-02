let xPos = 1;
let yPos = 1;

let xSpeed = 1;
let ySpeed = 1;

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