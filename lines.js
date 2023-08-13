function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(200);
}

function draw(){
  if(mouseIsPressed===true){
    let y = mouseY;
    let x = mouseX;
  while(x < windowWidth){
    ellipse(x,y,20,20);
    x = x+10;
  }
}
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
