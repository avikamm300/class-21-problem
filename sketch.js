var fixedRect, movingRect;
var gameobject1, gameobject2, gameobject3, gameobject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(800,600,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameobject1 = createSprite(200,100,80,30);
  gameobject1.shapeColor = "green";
  gameobject2 = createSprite(800,600,80,30);
  gameobject2.shapeColor = "green";
  gameobject3 = createSprite(200,500,80,30);
  gameobject3.shapeColor = "green";
  gameobject4 = createSprite(200,700,80,30);
  gameobject4.shapeColor = "green";

  movingRect.velocityX=-5;
  gameobject2.velocityX=5;
}

function draw() {
  background(0,0,0);  
  

  if(isTouching(movingRect, gameobject3)){
    movingRect.shapeColor = "red"
    gameobject3.shapeColor = "red"
  }
  else{
    movingRect.shapeColor = "green"
    gameobject3.shapeColor = "green"
  }

  bounceOff(movingRect,gameobject2);
 
  drawSprites();
}

