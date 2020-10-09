//Create an application with a moving circle
//and a rectangle at the bottom of the screen. 
//Using a rectangular hit test, have the ball bounce
//when the circle collides with the rectangle.

function setup() {
    createCanvas(800, 600);
    background(200);

function collideRect(circleX, circleY, rectX, rectY, rectW, rectH) {

    var colliding = false;

    if(circleX > rectX && circleX < rectX + rectW) {

        if(circleY > rectY && circleY < rectY + rectH) {

              return true;

        }

   }

   return false;
    }
}