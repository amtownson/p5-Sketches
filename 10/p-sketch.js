let x = 0;
let y1 = 1000;
let y2 = -1000;
let x1 = -1000;
let x2 = 1000;
let x3 = -1000;
let x4 = 1000;
let grow = 0;

function setup() {
  createCanvas(1000, 1000);
  frameRate(30);
  createLoop(
  {duration:9, gif:true})
}

function draw(){

background(3, 186, 252); 
noStroke();

fill(252, 3, 111)

push();
translate(x3, 0)
rect(100, 50, 800, 200)
if(x3<0){x3 = x3 + 5}
pop();

push();
translate(x4, 0)
rect(100, 350, 800, 200)
if(x4>0){x4 = x4 - 5}
pop();


push();
translate(x1, 0)
rect(100, 50, 200, 800);
if(x1<0){x1 = x1 + 5}
pop();

push();
translate(x2, 0)
rect(700, 50, 200, 800);
if(x2>0){x2 = x2 - 5}
pop();

fill(161, 3, 252);

push();
ellipse(500, 300, grow, grow)
if(grow<400){grow = grow + 2}
pop();

fill(252, 235, 3);

push();
translate(0, y1)
triangle(200, 1000, 300, 900, 400, 1000);
triangle(200, 900, 300, 800, 400, 900);
triangle(200, 800, 300, 700, 400, 800);
triangle(200, 700, 300, 600, 400, 700);
triangle(200, 600, 300, 500, 400, 600);
triangle(200, 500, 300, 400, 400, 500);
triangle(200, 400, 300, 300, 400, 400);
triangle(200, 300, 300, 200, 400, 300);
if(y1>0){y1 = y1- 5}
pop();

push();
translate(0, y2)
triangle(600, 900, 700, 800, 800, 700);
triangle(600, 600, 700, 700, 800, 600);
triangle(600, 500, 700, 600, 800, 500);
triangle(600, 400, 700, 500, 800, 400);
triangle(600, 300, 700, 400, 800, 300);
triangle(600, 200, 700, 300, 800, 200);
triangle(600, 100, 700, 200, 800, 100);
triangle(600, 0, 700, 100, 800, 0);
if(y2<0){y2 = y2 + 5}
pop();
}


function mousePressed(){
	saveCanvas("sketch10-1","jpg")
};