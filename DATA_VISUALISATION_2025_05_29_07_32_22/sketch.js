//a number of numerical values to use for the bars
var numbers = [19, 30, 62, 80, 52];


function setup() {
  //setting the canvas size
  createCanvas(400, 400);
  //using HSB colors for a smooth color
  colorMode(HSB, 360, 100, 100);
  //center align text
  textAlign(CENTER);
}


function draw() {
    background(0, 0, 95);
  //the width of each bar is based on the number of items in it
    let w = width / numbers.length;
  //this finds the maximum value from the list of numbers
    let maxVal = max(numbers);

  //this loops through each number in the list
  for (let i = 0; i < numbers.length; i++) {
    
    let n = numbers[i];
  //this is the x position of the bar
    let x = i * w;
    //the height of the bar will be based on the number
    let h = map(n, 0, maxVal, 0, height * 0.9);
    //this is the Y positon on top of the bar
    let y = height - h;
    //this chooses a color based on the numbers
    let hue = map(n, 0, maxVal, 200, 360);  


    //this checks if the mouse is hovered on the bars

    if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < height) {
      //this adds a color based on where the mouse is hovered
      fill((hue + 180) % 360, 100, 100); 
    } else {
      //if the mouse isnt hovered it keeeps the bar to its normal color
      fill(hue, 100, 100);
    }
      //this draws the bar
      rect(x, y, w, h);
      //black text color
      fill(0);
    //text size
      textSize(16);
      //this shows the number above the bar
      text(n, x + w / 2, y - 10);

    } 
}