/**
i-like-to-move-it
Jack Taddeo

I will be creating a program full of shapes that move, change size and colour.
*/

"use strict";

let bg = {
  r: 0,
  g: 0,
  b: 0
};
let circle1 = {
  x: 0,
  y: 250,
  size: 100,
  growthRate: 1,
  speed: 1,
  fill: 255,
  alpha: 200
};
let circle2 = {
  x: 500,
  y: 250,
  size: 75,
  sizeRatio: 0.5,
  speed: -1,
  fill: 2,
  alpha: 200
};
let square1 = {
  x: 0,
  y: 250,
  size: 500,
  speed: 1,
  fill: 2,
  alpha: 200
};
let square2 = {
  x: 250,
  y: 0,
  size: 500,
  speed: 1,
  fill: 2,
  alpha: 200
};
let square3 = {
  x: 0,
  y: 100,
  size: 500,
  speed: 0.5,
  fill: 2,
  alpha: 200
};
let square4 = {
  x: 0,
  y: 250,
  size: 500,
  speed: 0.5,
  fill: 2,
  alpha: 200
};

/**
Description of setup
*/
function setup() {
  createCanvas(500,500);
}


/**
Description of draw()
*/
function draw() {

  // Background
  background(bg.r,bg.g,bg.b);
  bg.r = map(circle1.size,100,width,0,255);

  // Left circle
  circle1.x = circle1.x + circle1.speed;
  circle1.x = constrain(circle1.x,0,width/2);
  circle1.size = circle1.size + 1;
  circle1.size = constrain(circle1.size,0,width -100);
  fill(circle1.fill,circle1.alpha);
  ellipse(circle1.x,circle1.y,circle1.size);

  // Top Square
  square1.y = square1.y - square1.speed;
  fill(bg.r,bg.g,bg.b);
  square(square1.x,square1.y,square1.size);

  // Right Square
  square2.x = square2.x - square2.speed;
  fill(bg.r,bg.g,bg.b);
  square(square2.x,square2.y,square2.size);

  // Top Square 2
  square3.y = square3.y + square3.speed;
  fill(bg.r,bg.g,bg.b);
  square(square3.x,square3.y,square3.size);

  // Right Square 2
  square4.x = square4.x + square4.speed;
  fill(bg.r,bg.g,bg.b);
  square(square4.x,square4.y,square4.size);

  // Right circle
  circle2.x = circle2.x + circle2.speed;
  circle2.x = constrain(circle2.x,width/2,width);
  circle2.size = circle1.size * circle2.sizeRatio;
  circle2.alpha = circle1.y;
  fill(bg.r+400,bg.g,bg.b+40);
  ellipse(circle2.x,circle2.y,circle2.size);

  // Mouse Hover
  line(mouseX, 0, mouseX, 500);
  line(0, mouseY, 500, mouseY);

  // Triangle Hill
  triangle(50, 750, 580, 200, 860, 750);
  triangle(50, 500, 580, 200, 860, 750);

}
// Mouse Click
function mousePressed() {
  loop();
}
function mouseReleased() {
  noLoop();
}
