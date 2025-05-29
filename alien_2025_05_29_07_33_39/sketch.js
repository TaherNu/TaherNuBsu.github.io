function setup() {
  //setting the canvas size
    createCanvas(400, 400);
    background(20);

      // Body
    stroke(0, 150, 0); //green outline
    strokeWeight(4); //the thickness of the outline
    fill(100, 255, 100); //green body color
    ellipse(200, 300, 135, 140); //ellipse of the body

    // Arms
    stroke(100, 255, 100); // green color for the arms and legs
    strokeWeight(6); //thickness of the outline
    line(160, 260, 60, 290); // Left arm
    line(240, 250, 340, 220); // Right arm

    // Legs
    line(170, 320, 150, 390); // Left leg
    line(230, 340, 250, 390); // Right leg

    // Head
    stroke(0, 150, 0); //green outline for the head
    strokeWeight(4); //thickness of the outline
    fill(100, 255, 100); //green color fill
    ellipse(200, 150, 130, 180); //ellipse of the head

    // Antennas 
    stroke(100, 255, 100); //green colored stroke
    strokeWeight(4); //thickness of the stroke
    noFill();
    bezier(170, 80, 150, 40, 100, 60, 110, 20); // Left antenna
    bezier(230, 80, 250, 40, 300, 60, 290, 20); // Right antenna

    // Antenna Tips
    fill(0, 255, 0); //green tip color
    ellipse(110, 20, 12, 12); // Left tip
    ellipse(290, 20, 12, 12); // Right tip

    // Left Eye
    fill(0); //black color
    push(); //this saves the current state of the drawing
    translate(170, 130); //this moves to the eye position
    rotate(-PI / 8); //this rotates them a little bit
    ellipse(0, 0, 35, 60); // Left eye
    pop();//this restores the saved drawing state

    //Right Eye
    push(); //this saves the current state of the drawing
    translate(230, 130); //this moves to the eye position
    rotate(PI / 8); //this rotates them a little bit
    ellipse(0, 0, 35, 60); // Right eye
    pop(); //this restores the saved drawing state

    // Eye Highlights
    fill(244); //white color fill
    ellipse(170, 130, 10, 20); // Left highlight
    ellipse(230, 130, 10, 20); // Right highlight

    // Mouth (Angry frown)
    fill(255, 0, 0); //red mouth color 
    arc(200, 190, 50, 20, PI, TWO_PI); //shape of the frown
}

