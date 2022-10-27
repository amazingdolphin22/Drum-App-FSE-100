let colorTop = '#FFF3D7';
let colorSide = 'white';
let colorDots = '#F0F08F'
let x;
let y;

function setup() {

  createCanvas(600, 400);
  background('yellow');

  drum(colorTop, colorSide);

  textSize(32);
  fill('black');
  text('Play me !', 230, 100);

  // stroke('red');
  // line(200, 160, 200, 240);
  // line(400, 160, 400, 240);
  // line(200, 160, 400, 160);
  // line(200, 240, 400, 240);

}
let drumSound;

function preload() {
  soundFormats('mp3', 'ogg');
  drumSound = loadSound('drum.mp3');
}
function mouseClicked() {
  x = mouseX;
  y = mouseY;

  if (x > 200 && x < 400 && y > 160 && y < 240) {
    background('orange');
    pattern();
    drumSound.play();
  }
}

function drum(colorTop, colorSide) {

  //bottom ellipse
  stroke('black');
  strokeWeight(4);
  fill(colorSide);
  ellipse(300, 300, 200, 80);

  //body
  fill(colorSide);
  rect(200, 200, 200, 100);

  //top ellipse
  fill(colorTop);
  ellipse(300, 200, 200, 80);

  //erase
  fill(colorSide);
  stroke(colorSide);
  rect(204, 293, 192, 15, 100);
}

function pattern() {

  colorTop = '#B2E0AB';
  colorSide = '#B8CAE3'
  drum(colorTop, colorSide);

  strokeWeight(3);
  stroke('black');
  line(202, 220, 230, 325);
  line(230, 325, 300, 245);
  line(300, 245, 370, 325);
  line(370, 325, 400, 220);

  fill(colorDots);
  circle(202, 220, 20);
  circle(230, 325, 20);
  circle(300, 245, 20);
  circle(370, 325, 20);
  circle(400, 220, 20);


  textSize(22);
  fill('black');
  strokeWeight(3.5);
  stroke('white');
  text('Good Job ! You know how to play the drum!', 10, 100);
}