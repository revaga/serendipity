function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw(){
  background(220);

  // click+drag on canvas to look around the shape
  orbitControl();

  fill(255,0,0,128);

  var numVertices = 200;
  translate(0,numVertices,0);
  rotateY(-millis()/500);
  if(mouseIsPressed){
      rotateY(millis()/500);

  }
  scale(40);
  beginShape();
  // a simple spiral shape
  for(let i = 0; i < numVertices; i++) {
    vertex(
      sin((i/numVertices*TWO_PI)*5)*sin(i/numVertices*PI)*2,
      -i/10,
      cos((i/numVertices*TWO_PI)*5)*sin(i/numVertices*PI)*2,
    );
  }
  endShape();
}
