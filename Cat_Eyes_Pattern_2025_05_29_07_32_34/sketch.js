//Cat Eyes Pattern
function setup() {
  //setting the canvas size
 createCanvas(400,400);
  //this variable sets the size of each circle
  var circleSize = 80;
  //white background color
  background(255);
  
  //this moves the origin a little bit so that the shapes are centered better
translate(circleSize / 2, circleSize / 2);
  //this loops accross the canvas horizonatally
  for (var x = 0; x < width; x += circleSize) {
    //this loops accross the canvas vertically
    for (var y = 0; y <height; y += circleSize) {
      //white outter ellipse
      fill(255);
      ellipse(x,y, circleSize * 0.9, circleSize * 0.7);
      //black middle ellipse
      fill(0);
      ellipse(x, y, circleSize * 0.8, circleSize * 0.7);
      //inner white ellipse
      fill(255);
      ellipse(x, y, circleSize *0.1, circleSize * 0.65);
    }
  }
}