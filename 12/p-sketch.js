// /https://p5js.org/examples/color-radial-gradient.html

let dim;

function setup() {
  createCanvas(1000, 1000);

    // frameRate(120);
  // createLoop(
  // {duration:7, gif:true})
  dim = 2000;
  background(0);
  colorMode(HSB, 360, 100, 100);
  noStroke();
  ellipseMode(RADIUS);
  frameRate(60);
  angleMode(DEGREES);
}

function draw() {
  background(0);



  push();
translate(0, -100)
  drawGradient(500, 500);
  pop();
translate(0, 0)
  push();
noFill();
stroke('white');
strokeWeight(75)
  triangle(350,500,500,250,650,500)
  pop();

  push();
noStroke();
fill('white');
translate(305, 500)
rotate(31)
  rect(1, -2, 75,300)
  pop();
  push();
  translate(605, 500)
  rotate(-31)
  rect(1, -1, 75, 350)
pop();
}

function drawGradient(x, y) {
  let radius = dim / 2;
  let h = random(210, 210);
  for (let r = radius; r > 0; --r) {
    fill(h, 100, 100);
    ellipse(x, y, r, r);
    h = (h + 0.1) % 360;
  
  }
}

function mousePressed(){
 saveCanvas("sketch12-1","jpg")
};