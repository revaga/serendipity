function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(200);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 60, 60);
}
