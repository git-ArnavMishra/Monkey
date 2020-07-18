//Global Variables
var bananaImage, obstacleImage, obstacle_group;
var background, score;
var ground;
var player;
var banana;
var banana2;
var ground, invisibleGround, groundImage;
function preload(){
  
  backImage =loadImage("jungle.jpg");
  player_running  = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  bananaImage = loadImage("Banana.png");
  
  obstacle_img = loadImage("stone.png");
 }


 function setup() {
 bg = createSprite(300,100,600,200);
 player = createSprite(50,250,20,50);
  banana = createSprite(200,100,20,20);
   banana2 = createSprite(500,100,20,20);
  background = loadImage("jungle.jpg");
  createCanvas(600,300);
  
   banana.addImage("Banana", bananaImage);
   banana2.addImage("Banana", bananaImage);
  player.addAnimation("running", player_running);
   bg.addImage("jungle", background);
   player.scale = 0.2;
   banana.scale = 0.05;
   banana2.scale = 0.05;
   invisibleGround = createSprite(100,300,400,10);
  invisibleGround.visible = false;
  invisibleGround.velocityX = -4;
  bg.velocityX = -4;
   invisibleGround.x = invisibleGround.width /2;
   //bg.x = bg.width /2;
}


function draw(){
  if(keyDown("space")) {
    player.velocityY = -10;
  }
  banana.velocityX = -4
  banana2.velocityX = -4
  player.velocityY = player.velocityY + 0.8
  player.collide(invisibleGround);
  
if (invisibleGround.x < 0){
    invisibleGround.x = invisibleGround.width/2;
  }
if (bg.x < 100){
    bg.x = 500;
    
}
  if (banana.x <0){
    banana.x = 500;
   
   
    
}
  if (banana2.x < 0){ 
    banana2.x = 500;
    
}
  if(player.isTouching(banana)){
     
      banana.destroy();
    banana = createSprite(200,100,20,20);
    banana.addImage("Banana", bananaImage);
     banana.scale = 0.05;
   player.scale = player.scale+0.01
    }
  if(player.isTouching(banana2)){
     
      banana2.destroy();
      banana2 = createSprite(500,100,20,20);
     banana2.addImage("Banana", bananaImage);
    banana2.scale = 0.05;
    player.scale = player.scale+0.01
      
    }

  //ground.visible = false
  
  drawSprites();
} 