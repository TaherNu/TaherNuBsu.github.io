function setup() {
    createCanvas(500, 300);
    background(220);
  
      // Road
    stroke(0);
    strokeWeight(4);
    line(0, 150, width, 150);

    // Car Body
    rect(100, 80, 200, 60, 15);

    // Car Roof
    quad(130, 80, 270, 80, 240, 40, 160, 40); //roof

    // Windows
    rect(160, 45, 35, 30, 5); // window
    rect(200, 45, 35, 30, 5); // window

    // Car Doors
    stroke(0);
    strokeWeight(2);
    line(190, 80, 190, 140); // Door line

    // Door Handles
    strokeWeight(1);
    rect(165, 105, 10, 5, 2); // Left door handle
    rect(235, 105, 10, 5, 2); // Right door handle

    // Wheels
    ellipse(150, 140, 45, 45); // Left wheel
    ellipse(250, 140, 45, 45); // Right wheel

    // Wheel Centers
    ellipse(150, 140, 20, 20);
    ellipse(250, 140, 20, 20);

    // Headlights
    ellipse(123, 100, 15, 15); // Left 
    ellipse(276, 100, 15, 15); // Right 

    // Headlight Glow Effect
    ellipse(123, 100, 30, 20);
    ellipse(276, 100, 30, 20);



    // Rear Bumper
    rect(300, 110, 10, 5);


}
