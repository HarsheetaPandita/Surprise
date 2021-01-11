var heart, heartImage;
var thought, thoughtImage;
var thing, thingImage;
var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload()
{
  heartImage = loadImage("heart.jpeg");
  thingImage = loadImage("box.jpeg");
  thoughtImage = loadImage("thought.jpeg");
}

function setup() 
{
  createCanvas(800,700);
  
  heart = createSprite(100,300,50,50);
  heart.addImage(heartImage);
  heart.scale = 0.3;
  
  thing = createSprite(600,200,50,50);
  thing.addImage(thingImage);
  thing.scale = 0.3;
  
  thought = createSprite(300,180,400,20);
  thought.addImage(thoughtImage);
  thought.scale = 0.9;
}

function draw() 
{
  background("white");
  
  if(gameState === PLAY)
    {
      thought.visible = false;
      
      if(keyDown("right_arrow"))
        {
          heart.velocityX = 5;
          heart.velocityY = 0;
        }
      if(keyDown("up_arrow"))
        {
          heart.velocityY = -5;
          heart.velocityX = 0;
        }
      if(keyDown("down_arrow"))
        {
          heart.velocityY = 5;
          heart.velocityX = 0;
        }
      if(keyDown("left_arrow"))
        {
          heart.velocityX = -5;
          heart.velocityY = 0;
        }
      
      if(heart.isTouching(thing))
        {
          gameState = END
          heart.velocityX = 0;
          heart.velocityY = 0;
        }
    }
  
  if(gameState === END)
    {
      thought.visible = true;
      heart.visible = false;
      thing.visible = false;
    }
  
  drawSprites();
}