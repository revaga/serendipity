//uses Perlin Noise
function setup() {
  createCanvas(windowWidth, windowHeight);
  text('press mouse to play!', 30, 30);

}

function draw() {
  if(mouseIsPressed === true){
  rad = random(0,40);
  yval = mouseY + random(-2*rad, 2*rad);
  xval = mouseX + random(-2*rad, 2*rad);
  circle(xval, yval, rad);
  }
  
}
