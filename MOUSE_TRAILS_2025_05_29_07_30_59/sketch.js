//MOUSE EFFECT

function setup (){
  createCanvas(400, 400);
  background(0);
}

function draw() {
  noStroke();

  //random colors
  let r = random(255);
  let g = random(255);
  let b = random(255);
  fill(r,g,b, 100);
  
  //drawing the ellipse at the position of te mouse
  ellipse(mouseX, mouseY, 35, 40);
  
  //this makes the trail fade in slowly
  fill(220,10);
  rect(0,0,width, height );

}