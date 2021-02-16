const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var stand;
var engine,world;
var slingShot,polygon;

function preload(){
polygonimg=loadImage("polygon.png")
}

function setup(){
createCanvas(1400,700);
engine = Engine.create();
world = engine.world;

stand1 = new Stand(600,450,300,10);
stand2 = new Stand(1000,300,200,10); 

block1 = new Block(480,430,30,30);
block2 = new Block(510,430,30,30);
block3 = new Block(540,430,30,30);
block4 = new Block(570,430,30,30);
block5 = new Block(600,430,30,30);
block6 = new Block(630,430,30,30);
block7 = new Block(660,430,30,30);
block8 = new Block(690,430,30,30);
block9 = new Block(720,430,30,30);

block10 = new Block(510,400,30,30);
block11 = new Block(540,400,30,30);
block12 = new Block(570,400,30,30);
block13 = new Block(600,400,30,30);
block14 = new Block(630,400,30,30);
block15 = new Block(660,400,30,30);
block16 = new Block(690,400,30,30);

block17 = new Block(540,370,30,30);
block18 = new Block(570,370,30,30);
block19 = new Block(600,370,30,30);
block20 = new Block(630,370,30,30);
block21 = new Block(660,370,30,30);

block22 = new Block(570,340,30,30);
block23 = new Block(600,340,30,30);
block24 = new Block(630,340,30,30);

block25 = new Block(600,310,30,30);

block26 = new Block(925,280,30,30);
block27 = new Block(955,280,30,30);
block28 = new Block(985,280,30,30);
block29 = new Block(1015,280,30,30);
block30 = new Block(1045,280,30,30);
block31 = new Block(1075,280,30,30);

block32 = new Block(955,250,30,30);
block33 = new Block(985,250,30,30);
block34 = new Block(1015,250,30,30);
block35 = new Block(1045,250,30,30);

block36 = new Block(985,220,30,30);
block37 = new Block(1015,220,30,30);

block38 = new Block(999,190,30,30);

polygon=Bodies.circle(50,300,20);
polygon.density=1;
World.add(world,polygon);
slingShot = new SlingShot(this.polygon,{x:100,y:300})

}

function draw(){
    Engine.update(engine);
    background("purple")

rectMode(CENTER);




stand1.display();
stand2.display();

block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();

block15.display();
block16.display();
block17.display();
block18.display();
block19.display();
block20.display();
block21.display();
block22.display();
block23.display();
block24.display();
block25.display();

block26.display();
block27.display();
block28.display();
block29.display();
block30.display();
block31.display();

block32.display();
block33.display();
block34.display();
block35.display();

block36.display();
block37.display();

block38.display();

imageMode(CENTER);
image(polygonimg,polygon.position.x,polygon.position.y,40,40);

}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
}
 function mouseReleased (){
     slingShot.fly();
 }  