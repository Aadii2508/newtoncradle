class ball  {
  constructor(x, y, width, height, angle) {
    var options = {
        
        'frictionAir':0.005,
        'density':3.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    //this.image = loadImage("sprites/base.png");
    World.add(world, this.body);
  }
  display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    ellipseMode(RADIUS);
    ellipse(0, 0, this.width, this.height);
    //imageMode(CENTER);
    //image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}