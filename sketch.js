
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var groundA;

var score = 0;
function preload()
{
	
}

function setup() {
	createCanvas(600,800);
	engine = Engine.create();
	world = engine.world;
  
	groundA = new Ground(width/2,height,width,20);
  
	for (var i =0; i<=innerWidth; i = i +80)
	{
	  divisions.push(new Division(i, height-divisionHeight/2, 10, divisionHeight))
	}
	for (var p = 75; p <=width; p = p +50)
	{
	  plinkos.push(new Plinko(p, 75));
	}
	for (var p = 50; p <=width; p = p +50)
  {
    plinkos.push(new Plinko(p, 175));
  }

  for (var p = 75; p <=width; p = p +50)
  {
    plinkos.push(new Plinko(p, 275));
  }

  for (var p = 50; p <=width-10; p = p +50)
  {
    plinkos.push(new Plinko(p, 375));
  }
  }


function draw() {
  rectMode(CENTER);
  background("white");
Engine.update(engine);
  groundA.display();

  
  textSize(35);
fill ("red");
  text("Score:"+score, 100, 40);
 
  
  textSize(35);
  text("200", 5, 550);
  text("200", 80, 550);
  text("500", 160, 550);
  text("500", 240, 550);
  text("100", 320, 550);
  text("100", 400, 550);
  text("100", 400, 550);
  text("200", 560, 550);
  text("200", 640, 550);
  text("200", 720, 550);
  

  for (var i = 0; i<divisions.length; i++)
  {
    divisions[i].display();
  }
  for (var p = 0; p<plinkos.length; p++)
  {
    plinkos[p].display();
  }
  if (frameCount%60 ===0)
  {
    var particle=new Particle(random(width/2-10, width/2+10), 10, 10);
    particles.push(particle);

    if (particle.body.position.x < 300)
    {
      score=score+500;
      particle=null;
      console.log("1"+score)
    }
    else if (particle.body.position > 600 && particle.body.position < 300)
    {
      score = score+100
      particle = null;
      console.log("2"+score);
    }
    else if (particle.body.position < 600 && particle.body.position < 900)
    {
      score = score+200
      particle = null;
      console.log("3"+score)
    }

  }

  for (var j = 0; j<particles.length; j++)
  {
    particles[j].display();
  }
  
}


//submit code 
