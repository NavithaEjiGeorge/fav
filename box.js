class Box {
  constructor(x, y, width, height) {

    this.width = width;
    this.height = height;
    this.x=x;
    this.y=y;
  }
  display(){
   // var pos =this.body.position;
   // var angle = this.body.angle;
    push();
   // translate(pos.x, pos.y);
   // rotate(angle);
    rectMode(CENTER);
    fill(255);
    rect(this.x,this.y, this.width, this.height);
    pop();
  }
};
