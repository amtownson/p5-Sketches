function preload() {
img = loadImage('sketch10-1.jpg');
}

function setup() {
  createCanvas(1000, 1000, WEBGL);

    frameRate(60);
  createLoop(
  {duration:3, gif:true})
angleMode(DEGREES)

}

function draw() {
background('black')
// rotateZ(frameCount * 0.01);
rotateY(frameCount*2)

texture(img);
sphere(400);


}

// function mousePressed(){
//  saveCanvas("sketch14-1","jpg")
// };