var wall, bullet;
var speed,weight,thickness;




function setup() {
  createCanvas(800,400);
  speed=random(223,321);
  weight=random(30,52);
  
  bullet=createSprite(50, 200, 50, 50);
  bullet.shapeColor="green";
  bullet.velocityX=speed;
   wall=createSprite(1200,200,thickness,height/2 );

}

function draw() {
  background(0);  
  if (wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.velocityX=0;
    
    bullet.shapeColor="blue";
    if(hasCollided(bullet,wall)){
      bullet.velocityX=0;
      var damage=0.5;
    }
    if(damage>10){
      wall.shapeColor=red;
    }
    if(damage<10){
      wall.shapeColor=yellow;
    }
  }
  drawSprites();
}

function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x  +bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true

  }
  return false;
}

