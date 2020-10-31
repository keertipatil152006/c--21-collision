var fixedrect, movingrect

var gameObject1,gameObject2

function setup() {
  createCanvas(1200,800);
  fixedrect = createSprite(200, 200, 50, 80);
  fixedrect.shapeColor = "yellow"
  movingrect = createSprite(400,200,80,30)
  movingrect.shapeColor = "yellow"
  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor = "yellow"
  gameObject2 = createSprite(300,100,50,50);
  gameObject2.shapeColor = "yellow"
}

function draw() {
  background("black");
  
  movingrect.x = World.mouseX
  movingrect.y = World.mouseY

  if(isTouching(movingrect,gameObject2))
{
  movingrect.shapeColor = "red"
  gameObject2.shapeColor = "red"
}
else
{
  movingrect.shapeColor = "yellow"
  gameObject2.shapeColor = "yellow"
}
 drawSprites();
}


