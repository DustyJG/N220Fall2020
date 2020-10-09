function setup() {
    createCanvas(400, 300);
    background(100);
    drawSun("#fcda51", 20, 150);
}


function drawSun(sunColor, numRays, yHeight) {
    
    fill(sunColor);
    stroke(sunColor);
    
    for(var i = 0; i < numRays; i++) {
        line(200, yHeight, i* 20, 300);

        circle(200, yHeight, 40);
    }

}