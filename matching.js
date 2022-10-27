
var maracaX = 102;
var drumX = 55;
var triangleX = 65;
var maracaY = 125;
var drumY = 240;
triangleY = 350;

function setup() {
  createCanvas(600, 400);
  background('green');
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
  background('green');

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

  //the sounds
  strokeWeight(1);
  stroke('black');

  //sound relating to maracas
  e3 = quad(310, 40, 350, 60, 350, 90, 310, 110);
  e2 = ellipse(300, 74, 40, 80);
  e1 = ellipse(350, 74, 20, 30);

  //sound relating to drum
  quad(310, 165, 350, 185, 350, 215, 310, 235);
  ellipse(300, 199, 40, 80);
  ellipse(350, 199, 20, 30);

  //sound relating to triangle
  quad(310, 290, 350, 310, 350, 340, 310, 360);
  ellipse(300, 324, 40, 80);
  ellipse(350, 324, 20, 30);

  if (keyIsPressed) {
    if (keyCode == 77) {
      maracaX += 5;
    }else if (keyCode == 68){
      drumX += 5;
    } 
    else if (keyCode == 84){
      triangleX += 5;
    }else if (keyCode == LEFT_ARROW) {
      maracaX -= 5;
      drumX -= 5;
      triangleX -= 5;
    }
    else if (keyCode == DOWN_ARROW){
      maracaY += 5;
      drumY +=5;
      triangleY +=5;
    }
    else if (keyCode == UP_ARROW){
      maracaY -= 5;
      drumY -=5;
      triangleY -=5;
    }
  }
  fill('purple');

  if (maracaX >= 250 && maracaX <= 370) {
    text("Playing maraca!", 270, 130);
  }
  if (drumX >= 200 && drumX <= 350) {
    text("Playing drum!", 270, 260);
  }
  if (triangleX >= 200 && triangleX <= 350) {
    text("Playing triangle!", 270, 380);
  }
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