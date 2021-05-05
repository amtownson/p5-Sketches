function setup(){

createCanvas(1000,1000);
background(0);
noLoop();
};


function draw (){
var x = 1000;
fill(255);
rect(480,0,40,1000);

stroke(255)
	for(let i = 0;i<10000;i++){

		line(500,0, x,8*i);
	};

	for(let i = 0;i<10000;i++){
		line(500,0, 0,8*i);
	};

stroke(0)
		for(let i = 0;i<100;i++){
		line(500,150,400+2*i,1000);
	};
noStroke();
fill(255)
rect(400,500,200,100);
};

function mousePressed(){
	saveCanvas("sketch03.2","jpg")
};