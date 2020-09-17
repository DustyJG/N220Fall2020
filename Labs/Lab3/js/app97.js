function setup() {
    createCanvas(800, 600);
}

    function draw() {
        background(225);

        noFill();

        for(var x = 0; x < 15; x = x + 1) {
            stroke(0 - (x * 10));

            circle(400, 300, x * 21);

    }

}