/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let canvas = {
  x: -160,
  y: 0,
  size: 700
}

let menu = {
  x: 550,
  y: 10,
  width: 140,
  height: 680
}

let redPaint = {
  x: 560,
  y: 20,
  size: 20
}
let bluePaint = {
  x: 595,
  y: 20,
  size: 20
}
let greenPaint = {
  x: 630,
  y: 20,
  size: 20
}
let yellowPaint = {
  x: 665,
  y: 20,
  size: 20
}
let whitePaint = {

}

let paintBrush = {
  x: undefined,
  y: undefined,
  size: 20,
  fill: undefined // NEW!
}

/**
Description of setup
*/
function setup() {
  createCanvas(700, 700);

  paintBrush.fill = color(255, 255, 255); // NEW!

}


/**
Description of draw()
*/
function draw() {
  background(0);

push();
  fill(230);
  square(canvas.x, canvas.y, canvas.size);
pop();

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

  // Blue Paint
  push();
  fill(0, 98, 255);
  noStroke(0);
  square(bluePaint.x, bluePaint.y, bluePaint.size);
  pop();

  // Green Paint
  push();
  fill(0, 189, 19);
  noStroke(0);
  square(greenPaint.x, greenPaint.y, greenPaint.size);
  pop();

  // Yellow Paint
  push();
  fill(255, 247, 0);
  noStroke(0);
  square(yellowPaint.x, yellowPaint.y, yellowPaint.size);
  pop();

  fill(paintBrush.fill);
  square(paintBrush.x, paintBrush.y, paintBrush.size);
  paintBrush.x = mouseX;
  paintBrush.y = mouseY;
}


function mouseClicked() {


  let dR = dist(mouseX, mouseY, redPaint.x, redPaint.y);
  if (dR < redPaint.size / 2) {
    paintBrush.fill = color(252, 23, 3);
  }
  let dB = dist(mouseX, mouseY, bluePaint.x, bluePaint.y);
  if (dB < bluePaint.size / 2) {
    paintBrush.fill = color(0, 98, 255);
  }
  let dG = dist(mouseX, mouseY, greenPaint.x, greenPaint.y);
  if (dG < greenPaint.size / 2) {
    paintBrush.fill = color(0, 189, 19);
  }
  let dY = dist(mouseX, mouseY, yellowPaint.x, yellowPaint.y);
  if (dY < yellowPaint.size / 2) {
    paintBrush.fill = color(255, 247, 0);
  }
}
