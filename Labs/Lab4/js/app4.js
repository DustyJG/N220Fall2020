let xPositions = [];
let yPositions = [];

function setup() {
	createCanvas(800,600);
	fill(255, 0, 0);
}

function draw() {
	background(0);
	if(xPositions.length > 10) {
		xPositions.shift();
    }
    
    if(yPositions.length > 10) {
		yPositions.shift();
    }
    
    xPositions.push(mouseX);
    yPositions.push(mouseY);

    for(var i = 0; i < xPositions.length; i++)
    for(var i = 0; i < yPositions.length; i++) {
		circle(xPositions[i], yPositions[i], i*5);
    }
}