function setup(){
var c = createCanvas(1000,1000);
background(250);
};

function draw(){

stroke(0);
noFill();

for(i=0; i<20; i++){
rect(100,800-i*10,100,100-i*10)
};


};

// function mousePressed(){
// 	saveCanvas("sketch03","jpg")
// };