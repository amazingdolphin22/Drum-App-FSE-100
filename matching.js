// Click and Drag an object

let shape1;
let shape2;
let shape3;
let drumSound;
let maracaSound;
let triangleSound;

function preload() {
  soundFormats('mp3', 'ogg');
  drumSound = loadSound('drum.mp3');
  maracaSound = loadSound('maracas.mp3');
  triangleSound = loadSound('triangle.mp3');
}

function setup() {
  createCanvas(600, 400);
  shape1 = new Draggable(100, 100, 50, 50);
  shape2 = new Draggable(100, 180, 50, 50);
  shape3 = new Draggable(100, 260, 50, 50);
}

function speaker(y) {
  strokeWeight(1);
  stroke('black');
  fill('gray');
  //quad(x1, y1, x2, y2, x3, y3, x4, y4)  //ccw, start: top left
  quad(310, y, 350, y + 20, 350, y + 50, 310, y + 70);  //maraca: y=40
  ellipse(300, y + 34, 40, 80);
  ellipse(350, y + 34, 20, 30);
}

function draw() {
  background('green');

  speaker(80);         //maraca
  speaker(190);        //drum
  speaker(300);        //triangle  

  // //drumSound
  // fill('gray');
  // e3 = quad(310, 40, 350, 60, 350, 90, 310, 110);
  // e2 = ellipse(300, 74, 40, 80);
  // e1 = ellipse(350, 74, 20, 30);

  // //maracaSound
  // quad(310, 165, 350, 185, 350, 215, 310, 235);
  // ellipse(300, 199, 40, 80);
  // ellipse(350, 199, 20, 30);

  // //triangleSound 
  // quad(310, 290, 350, 310, 350, 340, 310, 360);
  // ellipse(300, 324, 40, 80);
  // ellipse(350, 324, 20, 30);

  textSize(15);
  shape1.over();
  shape1.update();
  shape1.show();
  shape1.displayText();
  shape2.over();
  shape2.update();
  shape2.show();
  shape2.displayText();
  shape3.over();
  shape3.update();
  shape3.show();
  shape3.displayText();

  fill('white');
  textSize(12);
  text("Maraca", shape1.xPosition() + 6, shape1.yPosition() + 30);
  text("Drum", shape2.xPosition() + 10, shape2.yPosition() + 30);
  text("Triangle", shape3.xPosition() + 6, shape3.yPosition() + 30);
  fill('white');
  textSize (20);
  text("Drag the instruments to their sounds!", 120, 40);

}

function border(x, y, dx1, dy1, dx2, dy2) {
  stroke('white');
  strokeWeight(1);
  line(x + dx1, y + dy1, x + dx1, y + dy2);
  line(x + dx2, y + dy1, x + dx2, y + dy2);
  line(x + dx1, y + dy1, x + dx2, y + dy1);
  line(x + dx1, y + dy2, x + dx2, y + dy2);
}

function mousePressed() {
  x = mouseX;
  y = mouseY;
  shape1.pressed();
  shape2.pressed();
  shape3.pressed();
  if (x >= 280 && x <= 350 && y >= 80 && y <= 150) {
    drumSound.play();
    border(280, 80, 0, 0, 70, 70);
  }
  if (x >= 280 && x <= 350 && y >= 190 && y <= 260) {
    maracaSound.play();
    border(280, 190, 0, 0, 70, 70);
  }
  if (x >= 280 && x <= 350 && y >= 300 && y <= 370) {
    triangleSound.play();
    border(280, 300, 0, 0, 70, 70);
  }
}

function mouseReleased() {
  shape1.released();
  shape2.released();
  shape3.released();
}

