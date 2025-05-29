//creating variables to store image and mouse position
var img, x, y;

function preload() {
  //loading the image and storing it in the img variable
  img = loadImage("landscape.jpg")
}

function setup() {
  //setting up the canvas size
  createCanvas(400, 400);
  //black background
  background(0);
  noStroke();
}

function draw() {
  
  //storing the mouse position in the variables
  
  x = mouseX;
  y = mouseY;
  
  //loading the image
  image(img, 0, 0);
  
  //this gets the color of the pixel where the mouse is positioned
  var c = get(x,y);
  
  //this draws a rectangle with the color of the pixel where the mosue is positioned
  fill(c);
  rect(x, y, 55, 55);
}