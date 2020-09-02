let xPos = 0;
let yPos = 0;

function setup() {
    createCanvas(400, 300);
}

function draw() {
    background(green)
    xPos++;
    circle(xPos, 200, 30)
    fill(blue);
    if( xPos > 164 ) {
        fill (red);
    }
}