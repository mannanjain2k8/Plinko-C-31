const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var DivisionHeight =300;
var divisions = [];
var plinkos = []
var particles = [];



function setup() {
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  
  createCanvas(495,800);
  

  for (var i = 8;i <= width;i = i+80)
  {
      divisions.push(new Divisions(i, height - 150,10,DivisionHeight));
  }
 
  for(var j = 20;j <= width;j = j  + 50){
    plinkos.push(new Plinko(j,75,15));
    plinkos.push(new Plinko(j,255,15))
    
  }

  for(var l = 46;l <= width;l = l + 50){
    plinkos.push(new Plinko(l,165,15));
    plinkos.push(new Plinko(l,345,15))
    
  }

  ground = new Ground(2,798,990,10)

}

function draw() {

  
  background(0);  
  
  
  

  for (var k = 0; k < divisions.length;k++)
        {
            divisions[k].display();
        }

  

  for(var j = 0;j < plinkos.length;j++){
     plinkos[j].display();
     
  }

  

  for(var l = 0;l < plinkos.length;l++){
     plinkos[l].display();
  }

  
  if(frameCount%50 === 0){
    particles.push(new Particle(random(width/2 - 15,width/2 + 15),10,8));
     
   }


   for(var p = 0;p <particles.length;p++){
     particles[p].display();
   }
    
   fill("red")
   strokeWeight(3)
   ground.display();

  drawSprites();
}

