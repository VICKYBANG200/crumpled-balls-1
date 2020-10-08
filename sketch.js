const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paperBall;
var ground;
var bucket1,bucket2,bucket3;

function setup() {
	createCanvas(1000, 700);

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

	paperBall=new Paper(200,600);

	var options={
		isStatic:true
	}
	bucket1=new Bucket(690,630,200,20,options);
	bucket2=new Bucket(580,590,20,100,options);
	bucket3=new Bucket(800,590,20,100,options);

	ground=new Ground(500,680,1000,20);
  
}


function draw() {
  background(0);

  Engine.update(engine);

  keyPressed();

  paperBall.display();

  ground.display();

  bucket1.display();
  bucket2.display();
  bucket3.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:3,y:-3});
  
	}
}




