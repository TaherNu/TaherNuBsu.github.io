function setup() {
  //setting the canvas size
  createCanvas(400, 400);
}

function draw() {
  //slightlty grey back ground color
  background(220);
  //this removes the border around shapes
  noStroke();
  //this maps mouseY to control animation speed
  let speed = map(mouseY, 0, height, 0.01, 0.2);
  //this maps mouseX to control the size of the circles
  let sizeFactor = map(mouseX, 0, width, 10, 80);
  //this starts a loop to draw about 400 animated circles
  for(let i = 0; i <400; i= i + 1){
    let angle = TWO_PI * i /400;
    //this sets the fill color using values that are similar to HSB for a clean effect
    fill(i % 255, 150 + 100 * tan(i/50), 200 - mouseX/2);
    
    //this calculates the position of x and y using sin and tan for wave effect
    let x = width/2+100 * sin(angle + frameCount * speed);
    let y = height /2 +100 * tan(angle);
    //this calculates the circle size based on the wave and mouse position
    let r = 20 * sin(10 * angle + frameCount * speed) + sizeFactor;
    //this draws the circles
    circle(x, y, r)
  }
}