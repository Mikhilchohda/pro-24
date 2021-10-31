const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  var options={
    isStatic:true
  }
  ground=Bodies.rectangle(0,height-1,width*2,4,options)
  World.add(world,ground)

  playerBase=Bodies.rectangle(200,200,180,200,options)
  World.add(world,playerBase)

  player=Bodies.rectangle(200,playerBase.position.y-100,50,150,options)
  World.add(world,player)
  playerArcher=new archer(270,playerBase.position.y-30,120,120)

  arrow=new PlayerArrow(playerArcher.body.position.x,playerArcher.body.position.y,100,10)
  //create player base body


  //create player archer



}

function draw() {
  background(backgroundImg);

  //show the player image using image() function

  //show the playerbase image using image() function


  Engine.update(engine);
  fill("black")
  rect(ground.position.x,ground.position.y,width*2,4)

  push()
  imageMode(CENTER)

  image(baseimage,playerBase.position.x,playerBase.position.y+150,180,150)
  image(playerimage,player.position.x,player.position.y+100,50,180)
  pop()
  playerArcher.display()
  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

  arrow.display()
  if(keyCode===32){
    arrow.shoot(playerArcher.body.angle)
  }
}
