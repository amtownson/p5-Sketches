let f;

function preload() {
f = loadFont('Gilbert.otf');
}


function setup(){

createCanvas(1000,1000);

};


function draw (){

// rotateX(-frameCount * 0.5);
background(0);
  textFont(f, 40);
  text("The quick brown fox", 10,270, width, 100);

};


// function mousePressed(){
// 	saveCanvas("sketch07","jpg")
// };