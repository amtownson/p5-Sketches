
let angle1 = 0;
let angle2 = 0;

function setup(){

createCanvas(1000,1000, WEBGL);
angleMode(DEGREES)
frameRate(60);
createLoop(
{duration:7, gif:true})

};


function draw (){
background(255, 173, 237);
noStroke();
fill(255, 255, 0);

rotateY(-frameCount * 1);

// top

push();
translate(0,-200);
rotate(angle1)
triangle(-100, -200, 0, 0, 100, -200);
pop();

// left
push();
translate(-100,-400);
rotate(angle1)
triangle(-100, 200, 0, 0, 100, 200);
pop();

push();
translate(-100,0);
rotate(angle1)
triangle(-100, -200, 0, 0, 100, -200);
pop();

push();
translate(-200, -200);
rotate(angle1)
triangle(-100, 200, 0, 0, 100, 200);
pop();

push();
translate(-200, 200);
rotate(angle1)
triangle(-100, -200, 0, 0, 100, -200);
pop();

push();
translate(-300, 0);
rotate(angle1)
triangle(-100, 200, 0, 0, 100, 200);
pop();

push();
translate(-300, 400);
rotate(angle1)
triangle(-100, -200, 0, 0, 100, -200);
pop();

push();
translate(-400, 200);
rotate(angle1)
triangle(-100, 200, 0, 0, 100, 200);
pop();

// right

push();
translate(100, -400);
rotate(angle2)
triangle(-100, 200, 0, 0, 100, 200);
pop();

push();
translate(100, 0);
rotate(angle2)
triangle(-100, -200, 0, 0, 100, -200);
pop();


push();
translate(200, -200);
rotate(angle2)
triangle(-100, 200, 0, 0, 100, 200);
pop();

push();
translate(200,200);
rotate(angle2)
triangle(-100, -200, 0, 0, 100, -200);
pop();

push();
translate(300, 0);
rotate(angle2)
triangle(-100, 200, 0, 0, 100, 200);
pop();

push();
translate(300, 400);
rotate(angle2)
triangle(-100, -200, 0, 0, 100, -200);
pop();

push();
translate(400, 200);
rotate(angle2)
triangle(-100, 200, 0, 0, 100, 200);
pop();

// middle

push();
translate(100, 0);
rotate(angle2)
triangle(-100, 200, 0, 0, 100, 200);
pop();

push();
translate(-100, 0);
rotate(angle1)
triangle(-100, 200, 0, 0, 100, 200);
pop();

push();
translate(0, 200);
rotate(angle2)
triangle(-100, -200, 0, 0, 100, -200);
pop();

if(angle1<360){angle1 = angle1 + 1}
if(angle2>-360){angle2 = angle2 - 1}
};


// function mousePressed(){
// 	saveCanvas("sketch06","jpg")
// };