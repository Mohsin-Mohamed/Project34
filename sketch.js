
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	beam1=new Beam(445,200,250,20)
	ball1=new Ball(120,500,40)
	sling1=new SlingShot(ball1.body,{x:360,y:200}) 
	ball2=new Ball(270,500,40)
	sling2=new SlingShot(ball2.body,{x:400,y:200})
	ball3=new Ball(420,500,40)
	sling3=new SlingShot(ball3.body,{x:440,y:200})
	ball4=new Ball(570,500,40)
	sling4=new SlingShot(ball4.body,{x:480,y:200})
	ball5=new Ball(720,500,40)
	sling5=new SlingShot(ball5.body,{x:520,y:200})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  beam1.display();
  ball1.display();
  sling1.display();
  ball2.display();
  sling2.display();
  ball3.display();
  sling3.display();
  ball4.display();
  sling4.display();
  ball5.display();
  sling5.display();
  drawSprites();
 
}

function keyPressed(){
    if (keyCode === UP_ARROW){
        Matter.Body.applyForce(ball1.body, ball1.body.position,{x:-105,y:105})
    }
}