
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var hr;
var circle1, circle2 , circle3, circle4, circle5, circle6 , circle7, circle8, circle9, circle10 , circle11, circle12;
var ground;
var stone;
var rubber;

function preload(){
	bg = loadImage("bbg.png");
}

function setup() {
	createCanvas(1700, 700);
	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	ground = new Ground(600, 650, 3000,15);
	ground.shapeColour = "black";

	circle1 = new Circle(300,600,40);
	circle2 = new Circle(350,600,40);
	circle3 = new Circle(400,600,40);
	circle4 = new Circle(450,600,40);
	circle6 = new Circle(300,600,40);
	circle7 = new Circle(350,600,40);
	circle5 = new Circle(400,600,40);
	circle8 = new Circle(450,600,40);
	circle9 = new Circle(300,600,40);
	circle10 = new Circle(350,600,40);
	circle11 = new Circle(400,600,40);
	circle12 = new Circle(450,600,40);

	hr = new Hr(440,500,150,200);
	
	stone = new Stone(700,600,150,200); 

	rubber = new Rubber(600,250,60,60); 

	Engine.run(engine);
  
}
function draw() {
  rectMode(CENTER);

  background(bg);

    circle1.display();
	circle2.display();
	circle3.display();
	circle4.display();
	circle5.display();
	circle6.display();
	circle7.display();
	circle8.display();
	circle9.display();
	circle10.display();
	circle11.display();
	circle12.display();

	stone.display();
	rubber.display();

	hr.display();
	ground.display();

    stroke("blue");
    fill("white");
    textSize(40);
    text("BY SHIVANI UPADHYAY",570,150);
    textSize(40);
    text("*BE STRONG*",650,100);
 
  drawSprites();
 
}
