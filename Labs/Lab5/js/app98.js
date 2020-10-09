//Using an array for the three colors,
//draw a stoplight using a for loop 
//and only one circle() call in your code.

let xPos = 400
let radius = 90

let red = "#ff0000"
let yellow = "#ffff00"
let green = "#00ff00"

let colors = [green, yellow, red]

function setup() {
    createCanvas(800, 600);
    background(200);

    for (var i = 0; i < colors.length; i++) {
        fill(colors[i]);
    }

    for (var yPos = 100; yPos < 510; yPos = yPos + 200) {   
        circle(xPos, yPos, radius);
    }
}