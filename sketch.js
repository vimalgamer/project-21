var bullet,wall; 

var speed,thickness,weight;

var damage;

var object1,object2;

function setup() {
  createCanvas(1600,400);
  
  speed = Math.round(random(223,321));
  thickness = Math.round(random(22,83));

  wall = createSprite(1500,200,thickness,height/2);
  wall.shapeColor = "white";
  weight = Math.round(random(30,52));

  bullet = createSprite(50,200,80,40);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";

  damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
}

function draw() {
  background("black");  
  
  hasCollided(bullet,wall);

  drawSprites();
}

function hasCollided(object1,object2){
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;

 if(object1,object2){
   if(bulletRightEdge >= wallLeftEdge){
     if(damage > 10){
    object2.shapeColor = "red";
     }
   if(damage < 10){
    object2.shapeColor = "green";
    bullet.x = 1490;
   }
  }
}
}