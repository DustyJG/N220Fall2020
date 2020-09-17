let no_of_rows = 3;

function setup() {
    createCanvas(400, 300);
}

function draw() {
    background(255);
    fill(255, 0, 0);
  
    // for each row
    for (let row = 0; row <= no_of_rows; row++) {
      
        // for each column in the row
        for (let column = 0; column <= row ; column ++) {
           square(column * 75, row * 75, 75);
        }
    }
}