
"use strict";

let state = 'title';

let user = {
x: 400,
y: 700,
vx: 0,
vy: 0,
inputThreshold: 0,
speed: 5,
size: 50
}
let unit = 50;  // For user movement

let tree = {
  x: 400,
  y: 400,
  size: 75
}

let truck = {
  x: 650,
  y: 700,
  w: 250,
  h: 100,
  size: 250
}

let cuttingMusic, walkingMusic, truckMusic;

function preload() {
  // Music
   soundFormats('wav');
    cuttingMusic = loadSound('assets/sounds/Wood');
    walkingMusic = loadSound('assets/sounds/Walk');
    truckMusic = loadSound('assets/sounds/Truck');
  }

function setup() {

}



function draw() {
  createCanvas(800, 800);
  background(51);

  if (state === 'title') {
  title();
  }
  else if (state === 'level1') {
  level1();
  }
  else if (state === 'level1Vic') {
  level1Vic();
  }
}

function title() {
  push();
  textSize(100);
  fill(200,100,100);
  textAlign(CENTER,CENTER);
  text('START',width/2,height/2);
  pop();
}
function level1() {
  displayUser();
  moveUser();

  displayTree();
  checkTree();

  displayTruck();
  checkTruck();
}
function level1Vic() {
  push();
  textSize(64);
  fill(200,100,100);
  textAlign(CENTER,CENTER);
  text('LEVEL 1: COMPLETE!',width/2,height/2);
  pop();
}

function mousePressed() {
  if (state === 'title') {
    state = 'level1';
  }
  if (state === 'level1Vic') {
    truckMusic.play();
  }
}

// Draw the user as a circle
function displayUser() {
  push();
  ellipseMode(CENTER);
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
        walkingMusic.play();
      }
  if (keyIsDown(LEFT_ARROW)) {
      user.inputThreshold += 0.05;}
      if (user.inputThreshold >= 1) {
        user.x += -unit;
        user.inputThreshold = 0;
        walkingMusic.play();
      }
  if (keyIsDown(UP_ARROW)) {
      user.inputThreshold += 0.05;}
      if (user.inputThreshold >= 1) {
        user.y += -unit;
        user.inputThreshold = 0;
        walkingMusic.play();
      }
  if (keyIsDown(DOWN_ARROW)) {
      user.inputThreshold += 0.05;}
      if (user.inputThreshold >= 1) {
        user.y += unit;
        user.inputThreshold = 0;
        walkingMusic.play();
      }
}
// User Movement 02
  function move() {
  user.x = user.x + user.vx;
  user.y = user.y + user.vy;
}

function displayTree() {
  push();
  fill(50, 168, 82);
  rectMode(CENTER);
  square(tree.x, tree.y, tree.size);
  pop();
}
function checkTree() {
  let d = dist(user.x, user.y, tree.x, tree.y);
  if ((d < tree.size / 2 + user.size / 2) && (keyIsPressed === true)) {
    tree.x = random(0,width);
    tree.y = random(0,height);
    cuttingMusic.play();
  }
}

function displayTruck() {
  push();
  fill(199, 22, 60);
  rectMode(CENTER);
  rect(truck.x, truck.y, truck.w, truck.h);
  pop();
}
function checkTruck() {
  let d2 = dist(user.x, user.y, truck.x, truck.y);
  if ((d2 < truck.size / 2 + user.size / 2) && (keyIsDown(69))) {
    state = 'level1Vic';
  }
}
