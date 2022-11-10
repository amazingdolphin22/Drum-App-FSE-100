// Click and Drag an object
// Daniel Shiffman <http://www.shiffman.net>
let originYm = 100;
let originYd = 180;
let originYt = 260;
let originX = 100;

class Draggable {

  constructor(x, y, w, h) {
    this.dragging = false; // Is the object being dragged?
    this.rollover = false; // Is the mouse over the ellipse?
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.offsetX = 0;
    this.offsetY = 0;
  }

  over() {
    // Is mouse over object
    if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
      this.rollover = true;
    } else {
      this.rollover = false;
    }
  }

  update() {
    // Adjust location if being dragged
    if (this.dragging) {
      this.x = mouseX + this.offsetX;
      this.y = mouseY + this.offsetY;
    }
    if (this.x < 0 && this.dragging == false) {
      this.x = 100;
    }
    if (this.x > 600 && this.dragging == false) {
      this.x = 500;
    }
    if (this.y < 0 && this.dragging == false) {
      this.y = 100;
    }
    if (this.y > 400 && this.dragging == false) {
      this.y = 300;
    }
    if (shape1.xPosition() >= 250 && shape1.xPosition() <= 370 && shape1.yPosition() >= 80 && shape1.yPosition() <= 150 && this.dragging == false) {
      shape1.setX(originX);
      shape1.setY(originYm);
    }
    if (shape1.xPosition() >= 250 && shape1.xPosition() <= 370 && shape1.yPosition() >= 300 && shape1.yPosition() <= 370 && this.dragging == false) {
      shape1.setX(originX);
      shape1.setY(originYm);
    }
    if (shape2.xPosition() >= 250 && shape2.xPosition() <= 370 && shape2.yPosition() >= 190 && shape2.yPosition() <= 260 && this.dragging == false) {
      shape2.setX(originX);
      shape2.setY(originYd);
    }
    if (shape2.xPosition() >= 250 && shape2.xPosition() <= 370 && shape2.yPosition() >= 300 && shape2.yPosition() <= 370 && this.dragging == false) {
      shape2.setX(originX);
      shape2.setY(originYd);
    }
    if (shape3.xPosition() >= 250 && shape3.xPosition() <= 370 && shape3.yPosition() >= 80 && shape3.yPosition() <= 150 && this.dragging == false) {
      shape3.setX(originX);
      shape3.setY(originYt);
    }
    if (shape3.xPosition() >= 250 && shape3.xPosition() <= 370 && shape3.yPosition() >= 190 && shape3.yPosition() <= 260 && this.dragging == false) {
      shape3.setX(originX);
      shape3.setY(originYt);
    }

  }

  // droppedInSecond(xx, yy){
  //   if(xx>=250 && xx<=370 && yy>=190 && yy<=260) {
  //     notSecond=true;
  //   }
  // }

  show() {
    stroke(0);
    // Different fill based on state
    if (this.dragging) {
      fill('magenta');
    } else if (this.rollover) {
      fill('#dbacd0');
    } else {
      fill('#fcaacf');
    }
    rect(this.x, this.y, this.w, this.h);

  }

  pressed() {
    // Did I click on the rectangle?
    if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
      this.dragging = true;
      // If so, keep track of relative location of click to corner of rectangle
      this.offsetX = this.x - mouseX;
      this.offsetY = this.y - mouseY;
    }
  }

  released() {  // Quit dragging
    this.dragging = false;
  }

  displayText() {

    if (shape2.xPosition() >= 250 && shape2.xPosition() <= 370 && shape2.yPosition() >= 80 && shape2.yPosition() <= 150) { //40, 110
      fill('gold');
      text("Playing drum!", 270, 170);
    }
    else {
      fill('black');
      text("Keep trying to match!", 270, 170);
    }

    if (shape1.xPosition() >= 250 && shape1.xPosition() <= 370 && shape1.yPosition() >= 190 && shape1.yPosition() <= 260) { //165, 235
      fill('gold');
      text("Playing maraca!", 270, 280);
    }
    else {
      fill('black');
      text("Keep trying to match!", 270, 280);
    }

    if (shape3.xPosition() >= 250 && shape3.xPosition() <= 370 && shape3.yPosition() >= 300 && shape3.yPosition() <= 370) {
      fill('gold');
      text("Playing triangle!", 270, 390);
    }
    else {
      fill('black');
      text("Keep trying to match!", 270, 390);
    }
  }

  xPosition() {
    return this.x;
  }
  yPosition() {
    return this.y;
  }
  setX(xToSet){
    this.x = xToSet;
  }
  setY(yToSet){
    this.y = yToSet;
  }

}