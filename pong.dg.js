let score = 0;

let canvas = {	width: window.innerWidth - 16,
				height: window.innerHeight - 16
};

let paddle = {  width: canvas.height / 40,
				height: canvas.height / 8,
				color: "black",
				direction: 0,
				location: {
					x: canvas.width * 0.97,
					y: 0
				},
				speed: 5
};

let ball = {	color: "red",
				diameter: canvas.height / 30,
				direction: {
					x: -1,
					y: -1
				},
				location: {
					x: 0,
					y: 0
				},
				speed: 2
}

function setup() {
  createCanvas(canvas.width, canvas.height);
  paddle.location.y = (canvas.height - paddle.height) / 2;
  ball.location.x = canvas.width / 2;
  ball.location.y = canvas.height / 2;
}



function draw() {
	background(220);
	
	// Draw Scoreboard
	fill("black")
		.text("Score: " + score, 10, 10, 100, 100);

	/***************
	** Process Paddle
	****************/	

    // Update paddle verticle location
	paddle.location.y = paddle.location.y + paddle.speed * paddle.direction;

	    // Stop paddle at top of canvas
  	if (paddle.location.y < 0) {
  		paddle.direction = 0
  		paddle.location.y = 0;
  	}
  	// Stop paddle at bottom of canvas
  	else if (paddle.location.y > canvas.height - paddle.height) {
  		paddle.direction = 0;
  		paddle.location.y = canvas.height - paddle.height;
  	}

  	// Draw Paddle
	fill(paddle.color)
		.noStroke()
		.rect(paddle.location.x - paddle.width, paddle.location.y, paddle.width, paddle.height);

	/***************
	** Process Ball
	****************/	

	// Update ball location
	ball.location = {
  		x: ball.location.x + ball.direction.x * ball.speed,
  		y: ball.location.y + ball.direction.y * ball.speed
  	}

  	// ball bounces of left of canvas
  	if (ball.location.x - ball.diameter / 2 < 0) 
  		ball.direction.x = ball.direction.x * -1;

  	// ball bounces off of top of canvas
  	if (ball.location.y - ball.diameter / 2 < 0) 
  		ball.direction.y = ball.direction.y * -1;  	

  	// ball bounces off of bottom of canvas
  	if (ball.location.y + ball.diameter / 2 > canvas.height) 
  		ball.direction.y = ball.direction.y * -1;  

  	// ball bounces of paddle
  	if ( (ball.location.x > paddle.location.x - paddle.width - ball.diameter/2 ) &&  // ball is left of paddle
  		 (ball.location.x < paddle.location.x - paddle.width) &&  // ball is right of paddle
  		 (ball.location.y > paddle.location.y) &&  // ball is lower than top of paddle
  		 (ball.location.y < paddle.location.y + paddle.height) ){  // ball is right of paddle
  		ball.direction.x = ball.direction.x * -1;
  		score++;
  	}
  	// ball reacts to going right of canvas
  	else if (ball.location.x > canvas.width) {
  		ball.direction.x = -1;
  		ball.location.x = canvas.width / 2;
  		score = 0;
  	}

  	ball.location = {
  		x: ball.location.x + ball.direction.x * ball.speed,
  		y: ball.location.y + ball.direction.y * ball.speed
  	}
	
	// Draw Ball
	fill(ball.color)
		.noStroke()
		.circle(ball.location.x, ball.location.y, ball.diameter);
}

// Control Paddle, Up & Down
function keyPressed() {
	if (keyCode === UP_ARROW) {
    	paddle.direction = -1;
  	} 
  	else if (keyCode === DOWN_ARROW) {
    	paddle.direction = +1;
  	}
}