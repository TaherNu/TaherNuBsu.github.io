class Text {
  constructor(t, x, y, distance, amt) {
    this.t = t; //the characters to display
    this.x = x; //the x position
    this.y = y; //the animated y position
    
    this.amt = amt; //this is for the anmimation progress
    this.dir = 1; //this is for the direction of the bounce
    this.y0 = 0;  //this is for the original Y position
    this.distance  = distance; //this is for how far the letters will move up and down
  }
  //this draws the characters
  display(){
    textSize(size); //setting the font size
    textAlign(CENTER, CENTER); //center aligning the text
    text(this.t, this.x, this.y); //this draws the letter at the current position
  }
  //this updates the Y position to create that bouncing effect
  move() {
    this.y = this.y0 + this.dir * easeInBounce(this.amt) * this.distance;
    //when the animation is complete it will reverse direction for a seamless loop
    if (this.amt >= 1) {
      this.amt = 0;
      this.y0 += this.dir * this.distance;
      this.dir *= -1;
    }
    this.amt += 0.01;
  }
}