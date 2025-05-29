function preload() {
  //loading in the image and storing it in the img variable
  img = loadImage('landscape.jpg');
}

function setup() {
  //creating canvas the same size as the img height and width
  createCanvas(img.width, img.height);
  //this displays the image on the canvas
  image(img, 0, 0);
  //this applys a posterize filter that reduces the number of colors in the image
  filter(POSTERIZE, 4);
}

function draw() {
  //nothing is being drawn here as everything is being done in the setup function
}