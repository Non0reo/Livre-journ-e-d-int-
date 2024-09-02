let angle = 0;
let perspective = 0.9;
let bookPosX = 0;
let bookPosY = -100;
let bookPageLength = 130;
let bookHeight = 190;

let tex0;
let tex1;
let tex2;

function preload() {
  tex0 = loadImage('/assets/totoro.jpg');
  tex1 = loadImage('/assets/lego.png');
  tex2 = loadImage('/assets/dog.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(30);
  angle = constrain(map(mouseX, 100, width - 100, 0, -PI), -PI, 0);
  perspective = constrain(map(mouseX, 100, width - 100, 0.7, 0.9), 0.7, 0.9);
  bookHeight = constrain(map(mouseX, 100, width - 100, 140, 190), 140, 190);

  textureMode(NORMAL);
  scale(3.0);
  stroke(0);
  strokeWeight(30);

  texture(tex1);
  //rect(bookPosX, bookPosY, bookPageLength, bookHeight);
  beginShape();
  vertex(bookPosX, bookPosY, 0, 0);
  vertex(bookPageLength * perspective + bookPosX, bookPosY, 1, 0);
  vertex(bookPageLength + bookPosX, bookPosY + bookHeight, 1, 1);
  vertex(bookPosX, bookPosY + bookHeight, 0, 1);
  endShape(CLOSE);


  texture(angle > -PI / 2 ? tex0 : tex2);
  beginShape();
  vertex(bookPosX, bookPosY, 0, 0);
  vertex(cos(angle) * bookPageLength * perspective  + bookPosX, sin(angle) * bookPageLength + bookPosY, 1, 0);
  vertex(cos(angle) * bookPageLength + bookPosX, sin(angle) * bookPageLength + bookPosY + bookHeight, 1, 1);
  vertex(bookPosX, bookPosY + bookHeight, 0, 1);
  endShape(CLOSE);
}