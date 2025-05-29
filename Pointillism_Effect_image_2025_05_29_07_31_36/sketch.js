let img;

function preload() {
  //loading the image in the img variable
  img = loadImage('landscape.jpg');
}
function setup() {
  //this creates a canvas with the same width and height of the image
  createCanvas(img.width, img.height);
  //white background color
  background(255);
  //removing outlines
  noStroke();
  //this loads in the pixel data of the image 
  img.loadPixels();
}

function draw() {
  //this picks a random pixel position from the image
  let x = floor(random(img.width));
  let y = floor(random(img.height));
  
  //this calculates the index for the pixel in the array
  let i = (x + y * img.width) * 4;
  //this gets the rgb values of the pixel
  let r = img.pixels[i];
  let g = img.pixels[i + 1];
  let b = img.pixels[i + 2];
  
  //this sets the rgb color to match that of the image pixel
  fill(r,g,b);
  //this draws a ellipse at that location using the pixels color
  ellipse(x, y, 20);
}