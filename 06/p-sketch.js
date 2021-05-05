function setup(){

createCanvas(1000,1000);
background(0);
noLoop();
};


function draw (){

beginShape(TRIANGLE_STRIP);
	vertex(100, 500);
	vertex(300, 700);
	vertex(500, 500);
	vertex(700, 700);
	vertex(900, 500);
endShape();


beginShape(TRIANGLE_STRIP);
	vertex(100, 900);
	vertex(300, 900);
	vertex(100, 700);
	vertex(300, 700);
	vertex(100, 500);
	vertex(300, 500);
	vertex(100, 300);
	vertex(300, 300);
	vertex(300, 100);
endShape();




beginShape(TRIANGLE_STRIP);
	vertex(700, 100);
	vertex(700, 300);
	vertex(900, 300);
	vertex(700, 500);
	vertex(900, 500);
	vertex(700, 700);
	vertex(900, 700);
	vertex(700, 900);
	vertex(900, 900);
endShape();

beginShape(TRIANGLE_STRIP);
	vertex(100, 300);
	vertex(300, 100);
	vertex(300, 300);
	vertex(500, 300);
	vertex(500, 100);
	vertex(700, 300);
	vertex(900, 300);
endShape();

};


// function mousePressed(){
// 	saveCanvas("sketch06","jpg")
// };