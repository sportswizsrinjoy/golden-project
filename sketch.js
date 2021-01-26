var player1,player2;
var robot1,robot2,robot3,robot4,robot5,robot6;
var gun1,gun2,gun3;
var player1img,player2img;
var robot1img,robot2img,robot3img,robot4img;
var bg;
var score=0;
var gun1img,gun2img,gun3img;
var count=0;
var gameState="play";
var bulletimg,bullet;
function preload(){
player1img=loadImage("sprites/png/idle.png");
bg=loadImage("sprites/background/png/BG.png");
player2img=loadImage("sprites/png/idle1.png");
robot1img=loadImage("sprites/army/png/idle3.png");
robot2img=loadImage("sprites/army/png/idle3.png");
robot3img=loadImage("sprites/army/png/idle3.png");
robot4img=loadImage("sprites/army/png/idle3.png");
gun1img=loadImage("sprites/bluesword0.png");
gun2img=loadImage("sprites/greensword0.png");
gun3img=loadImage("sprites/hammer0.png");
bulletimg=loadImage("sprites/bullet0.png");
}
function setup() {

  createCanvas(800,800);
  player1=createSprite(20, 20, 50, 50);
  player2=createSprite(20,775,50,50);
  robot1=createSprite(770,20,50,50);
  robot2=createSprite(770,150,50,50);
  robot3=createSprite(770,280,50,50);
  robot4=createSprite(770,410,50,50);
  robot1.velocityX=random(-5,-10);
  robot1.velocityY=random(5,10);
  robot2.velocityX=random(-5,-10);
  robot2.velocityY=random(5,10);
  robot3.velocityX=random(-5,-10);
  robot3.velocityY=random(5,10);
  robot4.velocityX=random(-5,-10);
  robot4.velocityY=random(5,10);
 edges=createEdgeSprites();
 gun1=createSprite(100,100,10,10);
 gun2=createSprite(200,600,10,10);
 gun3=createSprite(600,400,10,10);
 player1.addImage(player1img);
 player1.scale=0.1;
player2.addImage(player2img);
player2.scale=0.1;

robot1.addImage(robot1img);
 robot1.scale=0.1;
 
 robot2.addImage(robot2img);
 robot2.scale=0.1;
 robot3.addImage(robot3img);
 robot3.scale=0.1;
 robot4.addImage(robot4img);
 robot4.scale=0.1;
 gun1.addImage(gun1img);
 gun1.scale=0.1;
 gun2.addImage(gun2img);
 gun2.scale=0.1;
 gun3.addImage(gun3img);
 gun3.scale=0.1;
}

function draw() {
  background(bg);
  if(gameState=="play"){

  
  if(keyDown("up")){
    player1.y=player1.y-5;
  } 
  if(keyDown("down")){
    player1.y=player1.y+5;
  } 
  if(keyDown("left")){
    player1.x=player1.x-5;
  }
  if(keyDown("right")){
    player1.x=player1.x+5;
  }
  if(keyDown("w")){
    player2.y=player2.y-5;
  } 
  if(keyDown("s")){
    player2.y=player2.y+5;
  } 
  if(keyDown("a")){
    player2.x=player2.x-5;
  }
  if(keyDown("d")){
    player2.x=player2.x+5;
  }
  robot1.bounceOff(edges);
  robot2.bounceOff(edges);
  robot3.bounceOff(edges);
  robot4.bounceOff(edges);
  player1.bounceOff(edges);
  player2.bounceOff(edges);
  if(player1.isTouching(gun1)){
    gun1.collide(player1);
    gun1.x=player1.x;
    gun1.y=player1.y;
  }
  if(player1.isTouching(gun2)){
    gun2.collide(player1);
    gun2.x=player1.x;
    gun2.y=player1.y;
  }
  if(player1.isTouching(gun3)){
    gun3.collide(player1);
    gun3.x=player1.x;
    gun3.y=player1.y;
  }
  if(player2.isTouching(gun1)){
    gun1.collide(player2);
    gun1.x=player2.x;
    gun1.y=player2.y;
  }
  if(player2.isTouching(gun2)){
    gun2.collide(player2);
    gun2.x=player2.x;
    gun2.y=player2.y;
  }
  if(player2.isTouching(gun3)){
    gun3.collide(player2);
    gun3.x=player2.x;
    gun3.y=player2.y;
  }
  if(keyDown("space")){
    drawbullet();
    bullet.y=player1.y;
    bullet.visible=true;
    if (bullet.isTouching(robot1)||bullet.isTouching(robot2)||bullet.isTouching(robot3)||bullet.isTouching(robot4)){
      score=score+1;
  
    }
  }
  if(keyDown("b")){
    drawbullet();
    bullet.y=player2.y;
    bullet.visible=true;
    if (bullet.isTouching(robot1)||bullet.isTouching(robot2)||bullet.isTouching(robot3)||bullet.isTouching(robot4)){
      score=score+1;
  
    }
    


  }
 
  if (player1.isTouching(robot1)||player1.isTouching(robot2)||player1.isTouching(robot3)||player1.isTouching(robot4)){
  count=count+1;
  }
  if (player2.isTouching(robot1)||player2.isTouching(robot2)||player2.isTouching(robot3)||player2.isTouching(robot4)){
    count=count+1;
  }
  if(count==5){
    gameState="end";
  }
  
}
if(keyDown("r")&&gameState=="end"){
  reset();
}
  if(gameState=="end"){
    robot1.velocityX=0;
    robot1.velocityY=0;
    robot2.velocityX=0;
    robot2.velocityY=0;
    robot3.velocityX=0;
    robot3.velocityX=0;
    robot4.velocityX=0;
    robot4.velocityX=0;
    
    
  }
  
  
  
    drawSprites();
    text("score "+score,400,20);
}
function drawbullet(){
bullet=createSprite(20,20,10,10);
bullet.velocityX=4;
bullet.visible=false; 
bullet.addImage(bulletimg);
bullet.scale=0.1; 
}
function reset(){
  gameState="play";
  score=0;
}

 