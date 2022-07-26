var bg,bgImg;
var player, shooterImg, shooter_shooting;
var parede;
var coracao1, coracao2, coracao3;
var coracao1Img, coracao2Img, coracao3Img;
var zumbi,zumbiImg;
var grupo;














function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  coracao1Img = loadImage("assets/heart_1.png");
  coracao2Img = loadImage("assets/heart_2.png");
  coracao3Img = loadImage("assets/heart_3.png");
  bgImg = loadImage("assets/bg.jpeg")
  zumbiImg= loadImage("assets/zombie.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
 bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
 bg.addImage(bgImg);
 bg.scale= 1.1;
 coracao1=createSprite(displayWidth-150,40,20,20);
 coracao1.addImage("vida1",coracao1Img);
 coracao1.scale=0.4;
 coracao1.visible=false;
 coracao2=createSprite(displayWidth-100,40,20,20);
 coracao2.addImage("vida2",coracao2Img);
 coracao2.scale=0.4;
 coracao2.visible=false;
 coracao3=createSprite(displayWidth-150,40,20,20)
 coracao3.addImage("vida3",coracao3Img);
 coracao3.scale=0.4;
 player = createSprite(displayWidth-1150,displayHeight-300,50,50);
 player.addImage(shooterImg);
 player.scale=0.3;
 player.setCollider("rectangle",0,0,200,470);
 player.debug=true;
 grupo=new Group();
 parede=createEdgeSprites();

}

function draw() {
  background(0); 
  if(keyDown("UP_ARROW")|| touches.length>0){
    player.y-=20;
  }
 if(keyDown("DOWN_ARROW")|| touches.length>0){
  player.y+=20;
 }
if(keyWentDown("SPACE")||touches.length>0){
player.addImage(shooter_shooting);
}
else if(keyWentUp("SPACE")||touches.length>0){
  player.addImage(shooterImg);
}
   player.collide(parede[2]);
   player.collide(parede[3]);
   if(grupo.isTouching(player)){
    for(var l=0;l<grupo.length;l++){
      if(grupo[l].isTouching(player)){
       grupo[l].destroy();
      }
      }
   }
   zombie();
   drawSprites();
    


}
function zombie(){
if(frameCount%50==0){
zumbi=createSprite(random(500,1100),random(100,500),40,40);
zumbi.addImage(zumbiImg);
zumbi.scale= 0.15;
zumbi.velocityX=-3;
zumbi.setCollider("rectangle",0,0,200,1000);
zumbi.debug=true;
zumbi.lifetime=400;
grupo.add(zumbi);


}
}