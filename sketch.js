var fixedRect, movingRect, L, R;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  L = createSprite(75,400,30,30);
  L.velocityX = 5
  R = createSprite(1125,400,30,30);
  R.velocityX = -5;



  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  bounceOff(L,R);

  bounceOff(movingRect,fixedRect);
  drawSprites();
}

