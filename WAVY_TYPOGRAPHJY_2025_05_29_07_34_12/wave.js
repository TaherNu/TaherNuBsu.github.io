class Wave {
  constructor(t, x, amt) {
    this.t = t;  //this si for the full text string
    this.tArray = this.t.split(""); //this splits the text into seperate characters
    this.x = x; //this is for the x posiiton of the column
    this.y = 0; //this is for the starting y position
    
    
    this.wave = [] //this array is to hold text objects
    //this creates a bouncing text object for each character 
     for(let i=0; i<this.tArray.length; i++) {
       //this calculates the different bouncing distance for each of the characters 
      let distance = height/2 + (height/2)/this.tArray.length * (i + 1);
      this.wave[i] = new Text(this.tArray[i], this.x, this.y, distance, amt);
    }
  }
  //this will display all the letters in the wave
  display() {
    for (let i = 0; i<this.tArray.length; i++) {
      this.wave[i].move();
      this.wave[i].display();
    }
  }
}