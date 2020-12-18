var bullet,wall;
var speed,weight;
var thickness;

function setup(){
  createCanvas(1600,400);


 bullet = createSprite(400,200,50,10);
  bullet.shapeColor = "blue";


  wall = createSprite(1400,200,thickness,height/2);


  speed=random(221,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet.velocityX = speed;

 


  
}

function draw(){
  background(0,0,0);

  
 bullet.depth = wall.depth;
 bullet.depth++

  if(hasCollided(bullet,wall))
   { 
    bullet.velocityX = 0;

   var damage =0.5*weight*speed / (thickness*10);

   if(damage>=10){
     wall.shapeColor = "red"
   }

   

   if(damage<10){
     wall.shapeColor = "green";
   }

   
  }

  drawSprites();
}


function hasCollided(bullet,wall){
  bulletRightEdge = bullet.x +bullet.width;
  wallLeftEdge = wall.x

  if(bulletRightEdge>=wallLeftEdge)

  {
    return true;
  }
  {
    return false;
  }
}