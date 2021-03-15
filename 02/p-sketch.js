function setup(){
var c = createCanvas(1000,1000);
background(0);
};

function draw(){

stroke(255);
fill(0);


for(var i = 0; i<20; i++){
line(100+i*10,100,100+i*10,900)
};

for(var i = 0; i<20; i++){
line(900-i*10,100,900-i*10,900)
};

for(var i = 0; i<20; i++){
line(300,100+i*10,700,100+i*10)
};

for(var i = 0; i<20; i++){
line(300,500+i*10,700,500+i*10)
};


};

function mousePressed(){
	saveCanvas("sketch02","jpg")
};