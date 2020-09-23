let colors = [ "#635621", "#fe7171", "#bfc0c7" ]

function setup() {
    createCanvas(400, 300);

    for( var i = 0; i < colors.length; i++) {
        fill(colors[i]);
        rect( 0 + 133 * i, 150, 400, 200 );
    }

}