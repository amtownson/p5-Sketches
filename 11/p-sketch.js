let x = 1; 
let y = 1; 


function setup() {
  createCanvas(1000, 1000, WEBGL);
  frameRate(120);
  createLoop(
  {duration:7, gif:true})
}

function draw(){
    strokeWeight(10);
    stroke('white');

    let n = 45;
    let s = 2;
    let size = 40 * n;
    let increment = 50;

    for (let i = 1; i < n; i++) {
      if (i % 4 == 0) {
        stroke('white');
      }

      push();
      translate(0,-75,-100);
    rotate((frameCount * PI * i) / 360);

      arc(
        0,
        0,
        size,
        size,
        -HALF_PI - QUARTER_PI / 1.5,
        HALF_PI + QUARTER_PI / 1.5
      );

      size -= increment;
    pop();

}

// top
noStroke();
fill('black');
push();
translate(0,-200);
triangle(-100, -200, 0, 0, 100, -200);
pop();

// left
push();
translate(-100,-400);
triangle(-100, 200, 0, 0, 100, 200);
pop();

push();
translate(-100,0);
triangle(-100, -200, 0, 0, 100, -200);
pop();

push();
translate(-200, -200);
triangle(-100, 200, 0, 0, 100, 200);
pop();

push();
translate(-200, 200);
triangle(-100, -200, 0, 0, 100, -200);
pop();

push();
translate(-300, 0);
triangle(-100, 200, 0, 0, 100, 200);
pop();

push();
translate(-300, 400);
triangle(-100, -200, 0, 0, 100, -200);
pop();

push();
translate(-400, 200);
triangle(-100, 200, 0, 0, 100, 200);
pop();

// right

push();
translate(100, -400);
triangle(-100, 200, 0, 0, 100, 200);
pop();

push();
translate(100, 0);
triangle(-100, -200, 0, 0, 100, -200);
pop();


push();
translate(200, -200);
triangle(-100, 200, 0, 0, 100, 200);
pop();

push();
translate(200,200);
triangle(-100, -200, 0, 0, 100, -200);
pop();

push();
translate(300, 0);
triangle(-100, 200, 0, 0, 100, 200);
pop();

push();
translate(300, 400);
triangle(-100, -200, 0, 0, 100, -200);
pop();

push();
translate(400, 200);
triangle(-100, 200, 0, 0, 100, 200);
pop();

// middle

push();
translate(100, 0);
triangle(-100, 200, 0, 0, 100, 200);
pop();

push();
translate(-100, 0);
triangle(-100, 200, 0, 0, 100, 200);
pop();

push();
translate(0, 200);
triangle(-100, -200, 0, 0, 100, -200);
pop();


}

function mousePressed(){
	saveCanvas("sketch11-1","jpg")
};