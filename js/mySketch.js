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
	lr = random(256);
	lg = random(256);
	lb = random(256);
	sr = random(256);
	sg = random(256);
	sb = random(256);
	rx= 0.01;
	ry= 0.01;
	sw= 25;
	ml= mic.amp();
}

function draw() {
	
	background(sr,sg,sb);
	
	fill(lr,lg,lb);
	stroke(sr,sg,sb);
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

	
	while(ml >=0.15) {
		sw = random(25)+ 25;
		changeColorMic();
		break;
	}
		ml=mic.amp();
	
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
	sr = random(256);
	sg = random(256);
	sb = random(256);	
}
