// https://editor.p5js.org/hcollins/sketches/rJ-N1-r57

//y=0.01x^2-200 - this is the equation of the parabola
var a = 300; 
var b = 1000; 

function setup() {
  createCanvas(1000, 1000);
  background(0); 
  frameRate(60);
  angleMode(DEGREES)
  createLoop(
  {duration:10.5, gif:true})
}

function draw(){
  translate(0, 0); 
b = b - 2;  
push();
    noStroke();
    fill(255, 255, 255, 100); 
    ellipse(b, 625, 100, 100); 
  pop();
  
  push();

    noStroke();
    fill(255, 0, 0, 100); 
     ellipse(b, 600, 100, 100); 
  pop();
  
  push();
    noStroke();
    fill(0, 0, 255, 100); 
    ellipse(b, 575, 100, 100); 
  pop();
  
  
    a = a - 1;
  push();
    translate(475, -100); 
    noStroke();
    fill(255, 255, 255, 100); 
    ellipse(a, 0.01 * a * a + 200, 100, 100); 
  pop();
  
  push();
    translate(500, -100); 
    noStroke();
    fill(255, 0, 0, 100); 
    ellipse(a, 0.01 * a * a + 200, 100, 100); 
  pop();
  
  push();
    translate(525, -100); 
    noStroke();
    fill(0, 0, 255, 100); 
    ellipse(a, 0.01 * a * a + 200, 100, 100); 
  pop();
    

  
}


// function mousePressed(){
// 	saveCanvas("sketch09-1","jpg")
// };