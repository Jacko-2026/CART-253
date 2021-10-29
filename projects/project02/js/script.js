/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let state = 'title';

let user = {
x: 0,
y: 0,
vx: 0,
vy: 0,
inputThreshold: 0,
speed: 5,
size: 25
}
let unit = 50;  // For user movement

function preload() {

}


function setup() {
  createCanvas(800, 800);
  background(51);
}


function draw() {
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
  // Move the user (with arrow keys)
  moveUser();
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
  push();
  textSize(64);
  fill(200,100,100);
  textAlign(CENTER,CENTER);
  text('[BLANK]',width/2,height/2);
  pop();
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
