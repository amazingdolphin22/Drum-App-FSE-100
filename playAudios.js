function setup() {
  createCanvas(600, 400);
  background('pink');
}

let drumSound;
let maracaSound;
let triangleSound;

function preload() {
  soundFormats('mp3', 'ogg');
  drumSound = loadSound('drum.mp3');
  maracaSound = loadSound('maracas.mp3');
  triangleSound = loadSound('triangle.mp3');
}


function draw() {

  //the sounds
  strokeWeight(1);
  stroke('black');

  //sound relating to maracas
  textSize(32);
  fill('orange');
  text('Maraca', 150, 80);
  fill('gray');
  e3 = quad(310, 40, 350, 60, 350, 90, 310, 110);
  e2 = ellipse(300, 74, 40, 80);
  e1 = ellipse(350, 74, 20, 30);

  //sound relating to drum
  textSize(32);
  fill('red');
  text('Drum', 157, 205);
  fill('grey');
  quad(310, 165, 350, 185, 350, 215, 310, 235);
  ellipse(300, 199, 40, 80);
  ellipse(350, 199, 20, 30);

  //sound relating to triangle
  textSize(32);
  fill('blue');
  text('Triangle', 142, 330);
  fill('gray');
  quad(310, 290, 350, 310, 350, 340, 310, 360);
  ellipse(300, 324, 40, 80);
  ellipse(350, 324, 20, 30);

  fill('grey');

  // stroke('red');
  // line(280, 40, 280, 110);
  // line(350, 40, 350, 110);
  // line(280, 40, 350, 40);
  // line(280, 110, 350, 110);

  // line(280, 165, 280, 235);
  // line(350, 165, 350, 235);
  // line(280, 165, 350, 165);
  // line(280, 235, 350, 235);

  // line(280, 290, 280, 360);
  // line(350, 290, 350, 360);
  // line(280, 290, 350, 290);
  // line(280, 360, 350, 360);
}

function mousePressed() {
  x = mouseX;
  y = mouseY;

  if (x >= 280 && x <= 350 && y >= 40 && y <= 110) {
    maracaSound.play();
  }
  if (x >= 280 && x <= 350 && y >= 165 && y <= 235) {
    drumSound.play();
  }
  if (x >= 280 && x <= 350 && y >= 290 && y <= 360) {
    triangleSound.play();
  }
}