//this variable allows the car to start off screen from the left
let carX = -300;

function setup() {
  //setting the canvas size
    createCanvas(500, 300);
}
function draw () {
  //sky background color
  background(135, 206, 235);
        // Road
    stroke(50);
    strokeWeight(4);//thickness of the stroke
    fill(50);
    line(0, 150, width, 150); 
    rect(0, 150, width, 150);

    // Car Body
    fill(255, 0, 0); //red color for the body
    stroke(0);
    strokeWeight(2);
    rect(carX + 100, 80, 200, 60, 15); //main rectangle body of the car

    // Car Roof
    fill(200, 0 ,0); //red roof color
    quad(carX + 130, 80,carX +  270, 80,carX +  240, 40,carX + 160, 40); //roof body

    // Windows
    fill(173,216,230); //light blue color for the windows
    noStroke();
    rect(carX + 160, 45, 35, 30, 5); // left window
    rect(carX + 200, 45, 35, 30, 5); // right window

    // Car Doors
    stroke(0);
    strokeWeight(2);
    line(carX + 190, 80,carX +  190, 140); // Door line

    // Door Handles
    fill(255);
    strokeWeight(1);
    rect(carX + 165, 105, 10, 5, 2); // Left door handle
    rect(carX + 235, 105, 10, 5, 2); // Right door handle

    // Wheels
    fill(30);
    stroke(0);
    strokeWeight(2);
    ellipse(carX + 150, 140, 45, 45); // Left wheel
    ellipse(carX + 250, 140, 45, 45); // Right wheel

    // Wheel Centers
    fill(100);
    ellipse(carX + 150, 140, 20, 20);
    ellipse(carX + 250, 140, 20, 20);

    // Headlights
    fill(255,255,102);
    stroke(0);
    ellipse(carX + 123, 100, 15, 15); // Left headlight
    ellipse(carX + 276, 100, 15, 15); // Right headlight

    // Headlight Glow Effect
    noStroke();
    fill(255, 255, 102, 80);
    ellipse(carX + 123, 100, 30, 20);
    ellipse(carX + 276, 100, 30, 20);

    // Rear Bumper
    fill(150);
    stroke(0);
    rect(carX + 300, 110, 10, 5);

  carX += 2;
  if (carX > width) {
    carX= -300
  }
}
  
