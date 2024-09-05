let angle = 0;
let perspective = 0.9;
let bookPosX = 0;
let bookPosY = -90;
let bookPageLength = 130;
let bookHeight = 190;

let tex0;
let tex1;
let tex2;

function preload() {
  tex0 = loadImage('assets/page1.png');
  tex1 = loadImage('assets/page3.png');
  tex2 = loadImage('assets/page2.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function animationClamped(start, end) {
  return constrain(map(mouseX, 100, width - 100, start, end), start, end);
}

function draw() {
  background(255);

  fill(0,0,0,20)
  for (let x = 0; x <= windowWidth + 100; x += 75) {
    for (let y = 0; y <= windowHeight + 100; y += 75) {
      const posX = x - width/2;
      const posY = y - height/2;
      circle(posX,  posY, dist(0,0, posX, posY) / animationClamped(2, 5));
      
    }
  }

  angle = constrain(map(mouseX, 100, width - 100, 0, -PI), -PI, 0);
  perspective = animationClamped(0.7, 0.9);
  bookHeight = animationClamped(140, 190);
  bookPosY = animationClamped(-90, -100);

  textureMode(NORMAL);
  scale(3.0);
  stroke(0);
  //strokeWeight(10);
  noStroke();

  texture(tex2);
  quad(
    bookPosX, bookPosY,
    bookPageLength * perspective + bookPosX, bookPosY,
    bookPageLength + bookPosX, bookPosY + bookHeight,
    bookPosX, bookPosY + bookHeight,
    10, 10
  )

  texture(angle > -PI / 2 ? tex0 : tex1);
  quad(
    bookPosX, bookPosY,
    cos(angle) * bookPageLength * perspective  + bookPosX, sin(angle) * bookPageLength + bookPosY,
    cos(angle) * bookPageLength + bookPosX, sin(angle) * bookPageLength + bookPosY + bookHeight,
    bookPosX, bookPosY + bookHeight,
    10, 10
  )
}