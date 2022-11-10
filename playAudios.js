let drumSound;
let maracaSound;
let triangleSound;
var maracaX = 102;
var drumX = 55;
var triangleX = 65;
var maracaY = 125;
var drumY = 240;
var triangleY = 350;

function preload() {
  soundFormats('mp3', 'ogg');
  drumSound = loadSound('drum.mp3');
  maracaSound = loadSound('maracas.mp3');
  triangleSound = loadSound('triangle.mp3');
}

function setup() {
  createCanvas(600, 400);
  background('pink');
}

function speaker(y) {
  strokeWeight(1);
  stroke('black');
  fill('gray');
  //quad(x1, y1, x2, y2, x3, y3, x4, y4)  //ccw, start: top left
  quad(330, y, 370, y+20, 370, y+50, 330, y+70);  //maraca: y=40
  ellipse(320, y+34, 40, 80);
  ellipse(370, y+34, 20, 30);
}

function draw() {

  //the sounds
  strokeWeight(1);
  stroke('black');
  textSize(32);
  fill('black');
  text('Click on the speakers!', 130, 40)
  
  // textSize(32);
  //sound relating to maracas
  fill('orange');
  text('Maraca', 180, 120);

  //sound relating to drum
  fill('red');
  text('Drum', 187, 230);

  //sound relating to triangle
  fill('blue');
  text('Triangle', 172, 340);
  
//the instruments
   fill('tan');
  ellipse(maracaX, maracaY, 17, 50);
  fill('magenta');
  ellipse(maracaX, maracaY - 55, 60, 80);

  fill('red');
  ellipse(drumX + 50, drumY, 100, 40);
  rect(drumX, drumY - 50, 100, 50);
  stroke('red');
  rect(drumX + 1, drumY - 1, 98, 5);
  stroke('black');
  fill('tan');
  ellipse(drumX + 50, drumY - 50, 100, 40);

  fill(240);
  strokeWeight(6);
  stroke('gray');
  triangle(triangleX, triangleY, triangleX + 80, triangleY, triangleX + 40, triangleY - 60);
  fill('gray');
  ellipse(triangleX + 40, triangleY + 5, 2, 35);
  
//speakers
  speaker(80);         //maraca
  speaker(190);        //drum
  speaker(300);        //triangle  

  // border(280, 80, 0, 0, 70, 70);
  // border(280, 190, 0, 0, 70, 70);
  // border(280, 300, 0, 0, 70, 70);
}

function border(x, y, dx1, dy1, dx2, dy2) {
  stroke('white');
  strokeWeight(1);
  line(x+dx1, y+dy1, x+dx1, y+dy2);
  line(x+dx2, y+dy1, x+dx2, y+dy2);
  line(x+dx1, y+dy1, x+dx2, y+dy1);
  line(x+dx1, y+dy2, x+dx2, y+dy2);
}

function mousePressed() {
  x = mouseX;
  y = mouseY;

  if (x >= 280 && x <= 350 && y >= 80 && y <= 150) {
    maracaSound.play();
    // border(280, 80, 0, 0, 70, 70);
  }
  if (x >= 280 && x <= 350 && y >= 190 && y <= 260) {
    drumSound.play();
    // border(280, 190, 0, 0, 70, 70);
  }
  if (x >= 280 && x <= 350 && y >= 300 && y <= 370) {
    triangleSound.play();
    // border(280, 300, 0, 0, 70, 70);
  }
}