function setup(){
var c = createCanvas(1000,1000);
background(255);
};

function draw(){

stroke(0);
noFill();


for(var i = 0; i<26; i++){
ellipse(240+i*10,750-i*20,250-i*10,250);
};

for(var i = 0; i<26; i++){
ellipse(750-i*10,750-i*20,250-i*10,250);
};

for(var i = 0; i<36; i++){
ellipse(670-i*10,590,250-9*10,250);
};


};


function mousePressed(){
	saveCanvas("sketch01","jpg")

};