var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var packageGroup
var chop, pkg
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function setup() {
 createCanvas(400, 400);
 rectMode(CENTER);
  engine = Engine.create();
  world = engine.world;
  
 chop=new hlo(200,50,200,70)
  grn=new Ground(200,390,400,5)
  box1=new Box(200,380,100,2)
  box2=new Box(150,350,2,50)
  box3=new Box(250,350,2,50)
   pkg=new Package(200,50,45,45)
}


function draw() {
 rectMode(CENTER);
 background(0);
  Engine.update(engine);
  
  chop.display()
 pkg.display()
 grn.display()
  box1.display()
  box2.display()
  box3.display()
}