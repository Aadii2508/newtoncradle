const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;

function preload() {
    //backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
   /* platform = new Ground(150, 305, 300, 170);

    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);
*/
    /*box1 = new Box(620,320,70,70);
    box2 = new Box(690,320,70,70);
    box3 = new Box(760,240,70,70);
    box4 = new Box(655,170,70,70);
    box5 = new Box(725,170,70,70);*/
    box6 = new Box(690, 100, 70, 70);
    Ball = new ball(100,100, 20, 20);
    Ball2 = new ball(120, 100, 20, 20);
    Ball3 = new ball(140, 100, 20, 20);
    Ball4 = new ball(160, 100, 20, 20);
    Ball5 = new ball(180, 100, 20, 20);
    rope = new Rope(Ball.body, {x: 500, y:50});
    rope2 = new Rope(Ball2.body, {x: 530, y:50});
    rope3 = new Rope(Ball3.body, {x: 560, y:50});
    rope4 = new Rope(Ball4.body, {x: 590, y:50});
    rope5 = new Rope(Ball5.body, {x: 620, y:50});

}

function draw(){
    background(0);
    Engine.update(engine);
    /*console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    */
    ground.display();
    /*box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();*/
    Ball.display();
    Ball2.display();
    Ball3.display();
    Ball4.display();
    Ball5.display();
    rope.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();
    /*pig1.display();
    log1.display();
    
    pig3.display();
    log3.display();

    
    log4.display();
    log5.display();

    console.log(bird.body.position.x);
    platform.display();*/    
}

function mouseDragged() {
    Matter.Body.setPosition(Ball.body, {x:mouseX, y:mouseY});
}