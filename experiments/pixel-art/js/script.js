/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let menu = {
  x:550,
  y:10,
  width: 140,
  height: 680
}

let redPaint = {
  x:560,
  y:20,
  size: 20
}
let bluePaint = {

}
let greenPaint = {

}
let yellowPaint = {

}
let whitePaint = {

}

let paintBrush = {
  x:undefined,
  y:undefined,
  size:20
}

/**
Description of setup
*/
function setup() {
  createCanvas(700, 700);

}


/**
Description of draw()
*/
function draw() {
  background(0);


// Menu Bar for Paint Selection
push();
  fill(65);
  strokeWeight(4);
  stroke(51);
  rect(menu.x, menu.y, menu.width, menu.height);
pop();

// Red Paint
push();
  fill(252, 23, 3);
  noStroke(0);
  square(redPaint.x, redPaint.y, redPaint.size);
pop();

square(paintBrush.x,paintBrush.y,paintBrush.size);
paintBrush.x = mouseX;
paintBrush.y = mouseY;
}
