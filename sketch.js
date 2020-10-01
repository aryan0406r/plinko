const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 225;

function setup() {
    createCanvas(480, 600);
    engine = Engine.create();
    world = engine.world;

    frameRate = 30;

    border1 = new Border(5, 300, 15, 600);
    border2 = new Border(240, 5, 480, 15);
    border3 = new Border(475, 300, 15, 600);
    border4 = new Border(240, 595, 480, 15);

    ground = new Ground(240, 600, 600, 150);
    
    particle1 = new Particle(200, 200);
}

function draw() {
    background(0);
    Engine.update(engine);
    textSize(18);
    fill("white");
    text("MADE BY ARYAN", 10, 30);
    displayObjects();
}

function displayObjects() {
    for (var j = 0; j < particles.length; j++)   {
        particles[j].display();
    }

    ground.display();
    border1.display();
    border2.display();
    border3.display();
    border4.display();

    for (var k = 0; k < divisions.length; k++)   {
        divisions[k].display();
    }

    for (var l = 0; l < plinkos.length; l++)   {
        plinkos[l].display();
    }

    for (var l = 40; l <= width - 40; l = l + 40)   {
        plinkos.push(new Plinko(l, 75));
    }

    for (var l = 30; l <= width - 15; l = l + 40)   {
        plinkos.push(new Plinko(l, 150));
    }

    for (var l = 40; l <= width - 40; l = l + 40)   {
        plinkos.push(new Plinko(l, 225));
    }

    for (var l = 30; l <= width - 15; l = l + 40)   {
        plinkos.push(new Plinko(l, 300));
    }

    for (var k = 20; k <= width - 15; k = k + 63)   {
        divisions.push(new Division(k, height - divisionHeight / 1.5, 15, divisionHeight));
    }
    
    if (frameCount % 90 === 0){
        particles.push(new Particle(200, 10));
    }
}





