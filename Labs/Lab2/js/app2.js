let xPos = 0;
let yPos = 40;

let xSpeed = 2;
let ySpeed = 0;

function setup() {
    createCanvas(400, 300);
}

function draw() {
    background(green)
    xPos = xPos + xSpeed;
    yPos = yPos + ySpeed;

    fill(blue);

    if( xPos > 164 ) {
        fill (red);
    }

        circle(xPos, yPos, 30);
}