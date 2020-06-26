var desktop, desktopImg1, desktopImg2, desktopImg3;
var laptop, laptopImg1, laptopImg2, laptopImg3, laptopImg4, laptopImg5;
var system, processorBrand, processorType, screen, model, price, storage, weight, battery, colour;

function preload(){
  desktopImg1 = loadImage("Mac Desk.jfif");
  desktopImg2 = loadImage("Dell Desk.jfif");
  desktopImg3 = loadImage("HP Desk.jfif");

  laptopImg1 = loadImage("Mac Lap.jfif");
  laptopImg2 = loadImage("Dell Lap B.jfif");
  laptopImg3 = loadImage("Dell Lap W.jfif");
  laptopImg4 = loadImage("HP Lap W.jfif");
  laptopImg5 = loadImage("HP Lap B.jfif");
}

function setup(){
  createCanvas(900,900);

  desktop = createSprite(450,450);
  desktop.addImage("apple",desktopImg1);
  desktop.addImage("dell",desktopImg2);
  desktop.addImage("hp",desktopImg3);
  desktop.addImage("MAC",laptopImg1);
  desktop.addImage("DELL L",laptopImg2);
  desktop.addImage("DELL L 2",laptopImg3);
  desktop.addImage("HP L",laptopImg4);
  desktop.addImage("HP L 2",laptopImg5);
  desktop.scale = 1;
}

function draw(){
  background("yellow");

  if(keydown("space")){
    desktop.changeAnimation("DELL L 2",laptopImg3);
  }

  drawSprites();
}