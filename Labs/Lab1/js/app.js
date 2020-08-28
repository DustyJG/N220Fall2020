function setup() {
    
    var red = "#FF0000";

    var startX = 50;
    
    createCanvas(800,600);
    noStroke();
    background(237, 218, 135);
    
    stroke(217, 135, 237);
    strokeWeight(10);
    fill(11, 206, 232);
    rect(startX, 300, 300, 50);
    
    stroke(217, 135, 237);
    strokeWeight(10);
    fill(red);
    circle(startX, 100, 30);
    
    
    stroke(5);
    line(100, 50, 300, 20);
    
}