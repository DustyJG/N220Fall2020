let xPos = 0;
let yPos = 0;

let xSpeed = 2;
let ySpeed = 0;

function setup() {
    createCanvas(400, 300);
}

function draw() {
    background(green)

    xPos = xPos + xSpeed;
    yPos = yPos + ySpeed;
    
    circle(xPos, 200, 30)
    fill(blue);
    if( xPos > 164 ) {
        fill (red);
    }
}