let f;

// https://fonts.google.com/specimen/Monoton?category=Display#standard-styles

function preload() {
f = loadFont('Monoton.ttf');
}


function setup(){

createCanvas(1000,1000, WEBGL);
textFont(f, 1000);
textSize(1000);
textAlign(CENTER, CENTER);
frameRate(60);
createLoop(
{duration:10.5, gif:true})
};


function draw (){

colorMode(HSB);
background(255)

  // rotateX(-frameCount * 0.01);
  rotateY(-frameCount * 0.01);
  rotateZ(-frameCount * 0.01);
  fill((0.3*frameCount) % 360, 100, 100);
  text("A", 0, -175);
  rotateY(-frameCount * 0.01);
  rotateZ(-frameCount * 0.01);
  fill((0.4*frameCount) % 360, 100, 100);
  text("A", 0, -175);
  rotateY(-frameCount * 0.01);
  rotateZ(-frameCount * 0.01);
  fill((0.5*frameCount) % 360, 100, 100);
  text("A", 0, -175);
  rotateY(-frameCount * 0.01);
  rotateZ(-frameCount * 0.01);
  fill((0.6*frameCount) % 360, 100, 100);
  text("A", 0, -175);
  rotateY(-frameCount * 0.01);
  rotateZ(-frameCount * 0.01);
  fill((0.7*frameCount) % 360, 100, 100);
  text("A", 0, -175);

};


// function mousePressed(){
// 	saveCanvas("sketch07","jpg")
// };