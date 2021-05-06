// /https://p5js.org/examples/color-radial-gradient.html

let dim;

function preload() {
f = loadFont('Monoton.ttf');
}

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
  // textFont(f, 800);
  // textAlign(CENTER, CENTER);

}

function draw() {
  background(0);
push();
  drawGradient(500, 500);
  pop();

// translate(500,350)

// text('A', 0, 0)
push();
noFill();
stroke((5*frameCount) % 360);
strokeWeight(50);
triangle(200,800,500,200,800,800)
pop();
}

function drawGradient(x, y) {
  let radius = dim / 2;
  let h = random(320, 320);
  for (let r = radius; r > 0; --r) {
    fill(h, 100, 100);
    ellipse(x, y, r, r);
    h = (h + 0.1) % 360;
  
  }
}

function mousePressed(){
 saveCanvas("sketch13-1","jpg")
};