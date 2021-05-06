let i = 0;

function setup() {
createCanvas(1000, 1000);
background('black');

    frameRate(30);
  createLoop(
  {duration:3, gif:true})
angleMode(DEGREES)

}

function draw() {

noFill();
stroke('white')

ellipse(240+i*10,750-i*20,250-i*10,250);

ellipse(750-i*10,750-i*20,250-i*10,250);

ellipse(670-i*10,590,250-i*10,250);

ellipse(330+i*10,590,250-i*10,250);

if(i<25.4){
i +=0.5;}

}

// function mousePressed(){
//  saveCanvas("sketch14-1","jpg")
// };