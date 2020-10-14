//Using an array for the three colors,
//draw a stoplight using a for loop 
//and only one circle() call in your code.

let xPos = 400
let radius = 90

let red = "#ff0000"
let yellow = "#ffff00"
let green = "#00ff00"

let colors = [green, yellow, red]

let z = [ { color: green, 
            yPos: 100},
          { color: yellow, 
            yPos: 300},
          { color: red, 
            yPos: 500} ] ;

function setup() {
    createCanvas(800, 600);
    background(200);

for ( var i = 0; i < colors.length; i++){
        fill(z[i].color);
        circle(xPos, z[i].yPos, radius);
    }
}