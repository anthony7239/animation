function setup() {
	createCanvas(640, 160);
	background("white");
}

var r = random(0,255);
var g = random(0,255);
var b = random(0,255);

function draw() {
    if (frameCount % 30 == 0) {
		r = random(0,255);
		g = random(0,255);
		b = random(0,255);
	}
    
    push();
    translate(width/2, height/2);
	rotate(frameCount * PI / 80);
    noStroke();
    fill("#D7D7D7");
    triangle(200, 160, 320, -100, 440, 160);
    pop();
    
    fill("black");
    textFont("Impact, Charcoal, sans-serif");
    textSize(64);
    text("ANTHONY", 204, 95);
    
    fill(r, g, b);
    noStroke();
    rect(201, 95, 235, 15);
}
