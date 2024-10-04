var canvas;
// This variable is for the microphone input
var mic;
// These variables represent the colors for the lines of the sphere
var lr;
var lg;
var lb;
// These variables represent the color of the sphere
var sr;
var sg;
var sb;
// These variables control the rotation speed and direction of the sphere
var rx; 
var ry;
// This variable is for the strokeWeight
var sw;
// This is the mic level
var ml;
	
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
function setup() {	
	canvas = createCanvas(windowWidth, windowHeight, WEBGL);
	mic = new p5.AudioIn();
	mic.start();
	lr = 0;
	lg = 0;
	lb = 0;
	sr = 255;
	sg = 255;
	sb = 255;
	rx= 0.01;
	ry= 0.01;
	sw= 25;
	ml= mic.getLevel();
}

function draw() {
	
	background(sr,sg,sb);
	
	fill(sr,sg,sb);
	stroke(lr,lg,lb);
	strokeWeight(sw);
	rotateX(frameCount * rx );
	rotateY(frameCount * ry);
	sphere(windowHeight);
	
	if(keyIsDown(UP_ARROW)) {
		rx+=.0002;
	} else if(keyIsDown(DOWN_ARROW)) {
		rx-=.0002;
	} else if(keyIsDown(LEFT_ARROW)) {
		ry-=.0002;
	} else if (keyIsDown(RIGHT_ARROW)) {
		ry+=.0002;
	} else if( keyIsDown(ENTER) ) {
			changeSphereColor();
	}
	
	while(ml >=0.10) {
		sw = random(25)+ 25;
		changeColorMic();
		break;
	}
		ml=mic.getLevel();
	
}
// Clicking the mouse changes its color and randomly sets the rotation speed and direction
function mouseClicked() {
	changeSphereColor();
	rx = random(.01);
	ry= random(.01);
}

function changeSphereColor() {
	sr= random(256);
	sg= random(256);
	sb= random(256);
	}

function changeColorMic() {
	lr = random(ml)+random(256);
	lg = random(ml)+random(256);
	lb = random(ml)+random(256);	
}
