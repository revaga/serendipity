var x = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}


function draw() {
  background(205, 200, 94);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(mouseY, mouseX);
}
