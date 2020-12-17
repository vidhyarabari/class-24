const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(600,300,90,90);
    box2 = new Box(800,300,90,90);
    ground = new Ground(600,height,1200,20)
    pig1=new Pig(700,300);
    log1=new Log(700,250,400,PI/2);

    box3=new Box(600,200,90,90);
    box4=new Box(800,200,90,90);
    pig2=new Pig(700,200);
    log2=new Log(700,150,400,PI/2);
     box5=new Box(700,100,90,90);
     log3=new Log(650,50,150,PI/4)
     log4=new Log(750,50,150,-PI/4);
     bird1=new Bird(100,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    box5.display();
    log3.display();
    log4.display();
    bird1.display();
}