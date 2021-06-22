const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var stone;
var rubber;
var plane;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(130,height,1200,20)
    hammer = new Hammer(10,100);
    stone = new Stone(500,300,100,100);
    rubber = new Rubber(500,400,50);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    stone.display();
    rubber.display();
    
 
}