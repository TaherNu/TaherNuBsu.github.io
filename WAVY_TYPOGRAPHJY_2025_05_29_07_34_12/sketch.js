let t = "bath spa university"; //this is the text that will be given the way effect
let size = 27;  //font size of the text
let waves = []; //an array to hold the wave objects
let num; //this is the number of wave columns 

function setup() {
  //setting the canvas size
  createCanvas(1000, 1000);
  //the number of columns will be based on the font size
  num = width/size;
  //this creates a wave object and stores them in the array
  for (let i=0; i<num; i++) {
    let x = i*size + size/2; //this is for the x position of each column
    let amt = 1 / num * i; //this is for the animation timing
      waves[i] = new Wave(t, x, amt); //this creates and adds a wave
  }
}

function draw() {
  background(220); //very slightly grey background color
  //this shows all the waves
  for (let i=0; i<num; i++) { 
      waves[i].display();
  }

}