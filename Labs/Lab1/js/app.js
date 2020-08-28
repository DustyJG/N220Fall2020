function setup() {
    
    var red = "#d62943";

    var blue = "#0bcee8";

    var mustard = "#edda87";

    var startX = 50;
    
    createCanvas(800,600);
    noStroke();
    background(mustard);
    
    stroke(217, 135, 237);
    strokeWeight(10);
    fill(blue);
    rect(startX, 300, 300, 50);
    
    stroke(217, 135, 237);
    strokeWeight(10);
    fill(red);
    circle(startX, 100, 30);
    
    
    stroke(5);
    line(50, 500, 300, 20);
    
}