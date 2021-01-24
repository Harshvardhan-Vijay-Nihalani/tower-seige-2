class BaseClass{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.width = 20;
        this.height = 30;
        this.body = Bodies.rectangle(x, y, this.width, this.height, options);
        this.body.visibility=255;
        
        World.add(world, this.body);
      }
      display(){
        if(this.body.speed < 1){
          push();
          rectMode(CENTER);
          rect(this.body.position.x, this.body.position.y, this. width, this.height)
          pop();
         }
         else{
           
          push();
          World.remove(world, this.body);
           this.body.visiblity-=5;
           tint(255,this.body.visiblity);
           pop();
         }
        
      }
}