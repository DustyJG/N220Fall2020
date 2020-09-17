function setup() {
    createCanvas(400, 300);
}

function draw() {
    background(255);
    var y = 150;
    // 25 circles
    for (let z = 8; z < 400; z = z + 16) {

        let x = z;
        
        if (z % 3 == 0 && z % 5 == 0) {
            //blue circles
            fill(0, 0, 255);
            circle(x, y, 8);
        }
        else if (z % 5 === 0) {
            //green circles
            fill(0, 255, 0);
            circle(x, y, 8);
        }
        else if (z % 3 === 0) {
            //purple circles
            fill(200, 55, 200);
            circle(x, y, 8);
        }
        else {
            //black circles
            fill(0);
            circle(x, y, 8);
        }
    }
}