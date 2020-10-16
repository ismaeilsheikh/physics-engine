const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies   

var engine,world
var ball
var ground
function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var ball_options = {
    restitution:0.8
  }
  ball=Bodies.circle(200,200,20,ball_options);
  var ground_options = {
    isStatic:true 
  }
  ground=Bodies.rectangle(200,380,400,20,ground_options);
  World.add(world,ball);
  World.add(world,ground);
}

function draw() {
  background(255,255,255);  

  Engine.update(engine);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  drawSprites();
}