function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  rad = random(0,40);
  yval = mouseY + random(-2*rad, 2*rad);
  xval = mouseX + random(-2*rad, 2*rad);
  circle(xval, yval, rad);
  
}
