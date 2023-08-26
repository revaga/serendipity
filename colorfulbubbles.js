let cnv;
let d;
function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  cnv.mouseOver(changeGray);
  d = 10;

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  let ry = random(0, windowHeight)
  let rx = random(0, windowWidth)
  let d = random(5,40);
  let check = 1;
  let r; let b; let g;
    let change = random(1,4)
    if(change <= 1){
      g = 66
      b = 245
      r = random(66,246)
    }
    else if(change <= 2){
      g = random(66,246)
      r = 66
      b = 245
    }
    else{
      b = random(66,246)
      r = 66
      g = 245
    }
  let t = random(10,225)
  fill(r,g,b,t)
  noStroke();
  ellipse(rx, ry, d, d);

}

function changeGray() {
  d = d + 10;
  if (d > 100) {
    d = 0;
  }
}
