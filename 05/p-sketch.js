function setup(){

createCanvas(1000,1000);
background(0);
noLoop();
};


function draw (){

var y = random(1000)
stroke(255);

for (let i = 0; i < 1000; i++) {
    line(10*i,0,10*i,1000);
};



stroke(255);

for (let i = 0; i < 1000; i++) {
    line(0,10*i,1000,10*i);
};


noStroke();

fill(0);

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


function mousePressed(){
	saveCanvas("sketch05","jpg")
};