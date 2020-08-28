function setup() {
    
    var red = "#FF0000";

    var startX = 50;
    
    createCanvas(800,600);
    noStroke();
    background(237, 220, 135);
    
    stroke(217, 135, 237);
    strokeWeight(5);
    fill(11, 206, 232);
    rect(startX, 300, 300, 50);
    
    stroke(217, 135, 237);
    strokeWeight(5);
    fill(red);
    circle(startX, 100, 30);
    
    
    stroke(10);
    line(100, 150, 300, 20);
    
}