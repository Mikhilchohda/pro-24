class archer{
    constructor(x,y,width,height)
    {
      const options={
          isStatic:true
      }
      this.x=x
      this.y=y
      this.width=width
      this.height=height
      this.collapse=false
      this.archerimage=loadImage("./assets/playerArcher.png")
      this.body=Matter.Bodies.rectangle(x,y,width,height,options)
      World.add(world,this.body)
      Matter.Body.setAngle(this.body,-90)
    }
    display(){
    var angle=this.body.angle
    if(keyIsDown(RIGHT_ARROW)&&angle<-70){
     angle+=1
     Matter.Body.setAngle(this.body,angle)
    }
    if(keyIsDown(LEFT_ARROW)&&angle>-103){
      angle-=1
      Matter.Body.setAngle(this.body,angle)
     }

     
    push()
    translate(this.x,this.y)
    rotate(angle)
    imageMode(CENTER)
    image(this.archerimage,0,0,this.width,this.height)

    pop()
    
    
    }
}