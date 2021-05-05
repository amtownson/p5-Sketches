function setup(){

createCanvas(1000,1000);
background(255);
noLoop();
};


function draw (){


drawTarget(500, 500, 1500, 75);

noStroke();

fill(255);

beginShape();
	vertex(0,525);
	vertex(0,525);
	vertex(0,0);
	vertex(1000,0);
	vertex(1000,525);
	vertex(1000,525);
	vertex(850,525);
	vertex(850,525);
	curveVertex(750,125);
	curveVertex(250,125);
	curveVertex(150,525);
	curveVertex(150,525);	
endShape();

beginShape();

	curveVertex(745,500);
	curveVertex(745,500);
	curveVertex(675,215);
	curveVertex(325,215);
	curveVertex(255,500);
	curveVertex(255,500);	
endShape();

beginShape();
	vertex(150,525);
	vertex(0,525);
	vertex(0,1000);
	vertex(125,1000);
endShape();

beginShape();
	vertex(850,525);
	vertex(1000,525);
	vertex(1000,1000);
	vertex(875,1000);
endShape();

beginShape();
	vertex(245,600);
	vertex(755,600);
	vertex(800,1000);
	vertex(200,1000);

endShape();



rect(0,900,1000,100)

};


// Learned drawTarget https://p5js.org/examples/structure-functions.html


function drawTarget(xloc, yloc, size, num) {
  const grayvalues = 255 / num;
  const steps = size / num;
  for (let i = 0; i < num; i++) {
    noFill();
    ellipse(xloc, yloc, size - i * steps, size - i * steps);
};
};

function mousePressed(){
	saveCanvas("sketch04.4","jpg")
};