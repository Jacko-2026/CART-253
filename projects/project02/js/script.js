/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let state = 'title';

let user = {
x: 400,
y: 800,
vx: 0,
vy: 0,
inputThreshold: 0,
speed: 5,
size: 50
}
let unit = 50;  // For user movement

let tree1;
let tree2;
let tree3;

function preload() {

}


function setup() {
tree1 = createTree(50,50);
}

function createTree(x,y) {
  let tree = {
  x: x,
  y: y,
  size: 50,
  cutDown: false
};
  return tree;
}

function draw() {
  createCanvas(800, 800);
  background(51);

  // Screens/States
  if (state === 'title') {
    title();
  }
  else if (state === 'tutorial') {
    tutorial();
  }
  else if (state === 'level1') {
    level1();
  }
  else if (state === 'levelVic') {
    levelVic();
  }
  else if (state === 'levelsMap') {
    levelsMap();
  }

  // Constrain User to Canvas
  user.x = constrain(user.x, 0, width);
  user.y = constrain(user.y, 0, height);
  // Move the user (with arrow keys)
  moveUser();

  // Check whether the user has cut down either tree
  checkTree(tree1);
}

// Levels +Title Screen & Victory Screens
function title() {
  push();
  textSize(100);
  fill(200,100,100);
  textAlign(CENTER,CENTER);
  text('START',width/2,height/2);
  pop();
}
function tutorial() {
  push();
  textSize(64);
  fill(200,100,100);
  textAlign(CENTER,CENTER);
  text('TUTORIAL!',width/2,height/2);
  pop();
}
function level1() {
  displayUser();
  moveUser();
  displayTree(tree1);
}
function levelVic() {
  push();
  textSize(64);
  fill(200,100,100);
  textAlign(CENTER,CENTER);
  text('LEVEL COMPLETE!',width/2,height/2);
  pop();
}
function levelsMap() {
  push();
  textSize(64);
  fill(200,100,100);
  textAlign(CENTER,CENTER);
  text('[BLANK]',width/2,height/2);
  pop();
}


function mousePressed() {
  if (state === 'title') {
    state = 'tutorial';
  }
  if (state === 'tutorial') {
    state = 'level1';
  }
  if (state === 'levelVic') {
    state = 'levelsMap';
  }
}

// Draw the user as a circle
function displayUser() {
  push();
  fill(255);
  ellipse(user.x, user.y, user.size);
  pop();
}

// Draw the tree
function displayTree(tree) {
  // Check if the tree is still available to be cut down
  if (!tree.cutDown) {
    // Display the tree as its position and with its size
    push();
    fill(255);
    square(tree.x, tree.y, tree.size);
    pop();
  }
}
// Checks if the user overlaps the tree object and cuts it down if so
function checkTree(tree) {
  if (!tree.cutDown, keyIsDown(69)) {
    let d = dist(user.x, user.y, tree.x, tree.y);
    if (d < user.size / 2 + tree.size / 2) {
      tree.cutDown = true;
      unit = 25
    }
  }
}

// User Movement 01
function moveUser() {
  if (keyIsDown(RIGHT_ARROW)) {
      user.inputThreshold += 0.05;}
      if (user.inputThreshold >= 1) {
        user.x += unit;
        user.inputThreshold = 0;
      }
  if (keyIsDown(LEFT_ARROW)) {
      user.inputThreshold += 0.05;}
      if (user.inputThreshold >= 1) {
        user.x += -unit;
        user.inputThreshold = 0;
      }
  if (keyIsDown(UP_ARROW)) {
      user.inputThreshold += 0.05;}
      if (user.inputThreshold >= 1) {
        user.y += -unit;
        user.inputThreshold = 0;
      }
  if (keyIsDown(DOWN_ARROW)) {
      user.inputThreshold += 0.05;}
      if (user.inputThreshold >= 1) {
        user.y += unit;
        user.inputThreshold = 0;
      }
}
// User Movement 02
  function move() {
  user.x = user.x + user.vx;
  user.y = user.y + user.vy;
}
