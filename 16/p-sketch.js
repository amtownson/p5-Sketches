// Taken from Renata, taken from here:
//https://editor.p5js.org/p5user1/sketches/KGT8KMUlb

let pg
let font
let rgba = ['rgba(255, 0, 0, 0.9)', 'rgba(0, 255, 0, 0.9)', 'rgba(0, 0, 255, 0.9)']
let textSize = 1550


function setup() {
  createCanvas(1000, 1000, WEBGL)


    frameRate(24);
  createLoop(
  {duration:2, gif:true})


  pg = createGraphics(width, height)
  pg.textAlign(CENTER, CENTER)
  pg.blendMode(SCREEN)
  pg.translate(width / 2, height / 2)
  pg.textSize(1000)
  pg.fill(rgba[0])
  pg.text('A', -4, -4)
  pg.fill(rgba[1])
  pg.text('A', 0, 0)
  pg.fill(rgba[2])
  pg.text('A', 4, 4)

}

function draw() {
translate(-350,-350)
rotateZ(random(-0.007, 0.007))

background('rgba(0, 0, 0, 1)')

image(pg, 0, 0, 700, 700)
  
}


// function mousePressed(){
//  saveCanvas("sketch14-1","jpg")
// };
