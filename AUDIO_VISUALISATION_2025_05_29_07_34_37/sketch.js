//creating variables for sound files and the background color
var s1, s2, s3, s4, s5;
var c;
//loading in the sound files
function preload() {
  s1 = loadSound('bubbles.mp3');
  s2 = loadSound('bomb.mp3');
  s3 = loadSound('crash.mp3');
  s4 = loadSound('drums.mp3');
  s5 = loadSound('suspense.mp3');
}
function setup() {
  //setting the canvas size
  createCanvas(400, 400);
  //setting the background color to black
  c = color(0,0,0);
  background(c);//this draws the background
  //this sets the volume for all sounds to the maximum
  s1.setVolume(1);
  s2.setVolume(1);
  s3.setVolume(1);
  s4.setVolume(1);
  s5.setVolume(1);
}

function draw() {
  //this constantly updates the background color with the current color
  background(c);
  //styling the text
  fill(255);//white color text
  textSize(20); //font size
  textAlign(CENTER);//centering the text
  
  //instructions on how to play the sound
  text("press 'a' 's' 'd' 'f' 'g'", width/2, 30);
}
//if 'a' is pressed then a sound will be played and the background color will change
function keyTyped(){
  if (key == 'a') {
    s1.play();
    c = color(255,89,94)
  }
  
//if 's' is pressed then a sound will be played and the background color will change
if (key == 's') {
    s2.play();
    c = color(255, 202, 58)
  }
  
//if 'd' is pressed then a sound will be played and the background color will change
if (key == 'd') {
    s3.play();
    c = color(138, 201, 38)
  }
  
//if 'f' is pressed then a sound will be played and the background color will change
if (key == 'f') {
    s4.play();
    c = color(25, 130, 196)
  }
  
//if 'g' is pressed then a sound will be played and the background color will change
if (key == 'g') {
    s5.play();
    c = color(106, 76,147)
  }
  
}