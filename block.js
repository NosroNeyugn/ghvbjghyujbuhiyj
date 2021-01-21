class Block{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.4,
            'friction':0.0
        }
        this.Visibility = 225;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        World.add(world, this.body);
      }
      display(){
        if(this.body.speed < 3){
        console.log(this.body.speed);
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rect(0,0,this.width,this.height);
      
        pop();
      } else{
           World.remove(world, this.body);
           push();
           this.Visibility = this.Visibility - 5;
           
           pop();
         }
       }
        

score(){
  if(this.Visibility<0 && this.Visibility>-105){
    score = score+1;
  }
}

}