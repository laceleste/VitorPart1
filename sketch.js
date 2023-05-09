var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg

function preload() {
  bgImg = loadImage("assets/bg.png")

  cleitinhoImg = loadAnimation("assets/cleitinho1.png","assets/cleitinho2.png","assets/cleitinho3.png","assets/cleitinho4.png")
  meteorImg = loadAnimation("assets/meteor.gif")
  // criar meteorImg 

  // criar asteroideImg

  
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  //criando canto superior e inferior
  bottomGround = createSprite(200, 390, 800, 20);
  bottomGround.visible = false;
  topGround = createSprite(200, 10, 800, 20);
  topGround.visible = false;

  //criando o cleitinho  
  cleitinho = createSprite(100, 200, 20, 50);
  cleitinho.addAnimation("cleitinho", cleitinhoImg);
  cleitinho.scale = 10;




}

function draw() {

  background(255);
  image(bgImg, 0, 0, width, height)
  //fazendo o balão de ar quente pular
  if (keyDown("space")) {
    cleitinho.velocityY = -6;
  }
  //adicionando gravidade
  cleitinho.velocityY = cleitinho.velocityY + 1;

  // chamada das funções
  handleAsteroide()
  handleMeteorTop()
  handleMeteorDown()
  drawSprites();
}
// meteoro = cano
function handleMeteorTop(){
  if(frameCount %50 === 0){
    meteortop = createSprite(width - 100, height/2-600, 50, 50)
//     meteor.addAnimation("meteor", meteorImg)
//     meteor.scale = 0.1

    meteortop.velocityX= -5
  }
}
function handleMeteorDown(){
  if(frameCount %50 === 0){
    meteordown = createSprite(width - 100, height/2+600, 50, 50)
//     meteordown.addAnimation("meteor", meteorImg)
//     meteordown.scale = 0.1

    meteordown.velocityX= -5
  }
}
// asteroide = cometa
function handleAsteroide(){
  if(frameCount %178 === 0){
    asteroide = createSprite(width - 100, height - 500, 50, 50)
    // asteroide.addAnimation("asteroide", asteroideImg)
    // asteroide.scale = 0.1
    asteroide.velocityY = random(2,5)
    asteroide.velocityX = random(-3,-5)
 
  }
}