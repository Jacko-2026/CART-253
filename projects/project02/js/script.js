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

let health1;
let health2;
let health3;
let health4;
let health5;
let healthBar = (
  health1, health2, health3, health4, health5
);

let tree1;
let tree2;
let tree3;
let treeGroup = (
  tree1, tree2, tree3
);

let enemy1;

let truck = {
  x: 600,
  y: 700,
  w: 170,
  h: 80,
  size: 100
}

// Levels on the levels Map (for level selection)
let level1Map = {
  x: 75,
  y: 75,
  size: 50
}
let level2Map = {
  x: 75,
  y: 250,
  size: 50
}

// Timer
var timerValue = 10;

function preload() {

}


function setup() {
// Create Timer
  push();
  textAlign(400,100);
  setInterval(timeIt, 1000);
  pop();

// Create Trees
tree1 = createTree(50,80);

// Create Enemies
enemy1 = createEnemy(250,350);
//Enemy Movemnt (Speed)
enemy1.vx = enemy1.speed;

// Create Health Bar
health1 = createHealth(170,10);
health2 = createHealth(130,10);
health3 = createHealth(90,10);
health4 = createHealth(50,10);
health5 = createHealth(10,10);
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
function createEnemy(x,y) {
  let enemy = {
  x: x,
  y: y,
  vx: 0,
  vy: 0,
  speed: 3,
  size: 75,
  followThreshold: 100,
  mode: 'waiting'
};
  return enemy;
}
function createHealth(x,y) {
  let health = {
  x: x,
  y: y,
  size: 25,
  hit: false
};
  return health;
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
  else if (state === 'level2') {
    level2();
  }
  else if (state === 'levelVic') {
    levelVic();
  }
  else if (state === 'levelGameOver') {
    levelGameOver();
  }
  else if (state === 'levelHealthOut') {
    levelHealthOut();
  }
  else if (state === 'levelsMap') {
    levelsMap();
  }

  // Constrain User to Canvas
  user.x = constrain(user.x, 0, width);
  user.y = constrain(user.y, 0, height);
  // Move the user (with arrow keys)
  moveUser();

  // Check whether the user has cut down a tree
  checkTree(tree1);
  checkTruck();
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
  push();
  textSize(54);
  fill(200,100,100);
  textAlign(CENTER,CENTER);
  text('[LEVEL 1]',width/2,height/2);
  pop();

  displayUser();
  moveUser();
// Display Trees
  displayTree(tree1);

// Display Hearts
  displayHeart(health1);
  displayHeart(health2);
  displayHeart(health3);
  displayHeart(health4);
  displayHeart(health5);

// Display Truck
  displayTruck();

  displayTimer();
//// Checks if the user has cut down tree1, if yes then they may leave via the truck
  let dTruck = dist(user.x, user.y, truck.x, truck.y);
  if ((dTruck < user.size / 2 + truck.size / 2) && (tree1.cutDown === true) && (keyIsDown(69)) && (unit === 50)) {
    state = 'levelVic';
  }
  if (timerValue == 0) {
    state = 'levelGameOver';
  }
}
function level2() {
  push();
  textSize(54);
  fill(200,100,100);
  textAlign(CENTER,CENTER);
  text('[LEVEL 2]',width/2,height/2);
  pop();

// User
  displayUser();
  moveUser();

// Display Trees
  displayTree(tree1);
  tree1.x = 50
  tree1.y = 80

// Display enemy
  displayEnemy(enemy1);
// Check if the user has been attacked by an enemy
  checkEnemy(enemy1);

// Display Hearts
  displayHeart(health1);
  displayHeart(health2);
  displayHeart(health3);
  displayHeart(health4);
  displayHeart(health5);

// Display Truck
  displayTruck();

// Timer
  displayTimer();

//// Checks if the user has cut down tree1, if yes then they may leave via the truck
  let dTruck = dist(user.x, user.y, truck.x, truck.y);
  if ((dTruck < user.size / 2 + truck.size / 2) && (tree1.cutDown === true) && (keyIsDown(69)) && (unit === 50)) {
    state = 'levelVic';
  }
  if (timerValue == 0) {
    state = 'levelGameOver';
  }
}
function levelVic() {
  push();
  textSize(64);
  fill(200,100,100);
  textAlign(CENTER,CENTER);
  text('LEVEL COMPLETE!',width/2,height/2);
  pop();
}
// If the user runs out of time, the level ends and resets to the levelsMap
function levelGameOver() {
  push();
  textSize(32);
  fill(200,100,100);
  textAlign(CENTER,CENTER);
  text('UH OH, YOU RAN OUT OF TIME!',width/2,height/2);
  pop();

  if (keyIsDown(13)) {
    state = 'levelsMap';
    }
  }
// If the user runs out of health, the level ends and resets to the levelsMap
function levelHealthOut() {
  push();
  textSize(32);
  fill(200,100,100);
  textAlign(CENTER,CENTER);
  text('UH OH, YOU RAN OUT OF HEALTH!',width/2,height/2);
  pop();

  if (keyIsDown(13)) {
    state = 'levelsMap';
      health1.hit = false;
      health2.hit = false;
      health3.hit = false;
      health4.hit = false;
      health5.hit = false;
      unit = 50;
      user.x = 400;
      user.y = 650;
  }
}
function levelsMap() {
  push();
  textSize(64);
  fill(200,100,100);
  textAlign(CENTER,CENTER);
  text('[MAP]',width/2,height/2);
  pop();

    displayLevel1();
    displayLevel2();
    displayUser2();
}


function mousePressed() {
  if (state === 'title') {
    state = 'tutorial';
  }
  if (state === 'tutorial') {
    state = 'level1';
    timerValue = 59;
  }
  if (state === 'levelVic') {
    state = 'levelsMap';
  }
}

//Timer
function displayTimer() {
  if (timerValue >= 10) {
    textSize(20);
    fill(255);
    text("0:" + timerValue, 775 / 2, 50 / 2);
  }
  if (timerValue < 10) {
    textSize(20);
    fill(255);
    text('0:0' + timerValue, 775 / 2, 50 / 2);
  }
  if (timerValue == 0) {
    textSize(20);
    fill(255);
    text('Level Over', 725 / 2, 50 / 2 + 20);
  }
}
function timeIt() {
  if (timerValue > 0) {
    timerValue--;
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
  if ((!tree.cutDown) && (keyIsDown(69))) {
    let dTree = dist(user.x, user.y, tree.x, tree.y);
    if (dTree < user.size / 2 + tree.size / 2) {
      tree.cutDown = true;
      unit = 25
    }
  }
}
// Draw the enemy
function displayEnemy(enemy) {
  push();
  fill(255);
  square(enemy.x, enemy.y, enemy.size);
  pop();
}
function checkEnemy(enemy) {
  let dEnemy = dist(user.x, user.y, enemy.x, enemy.y);
  if (dEnemy < user.size / 2 + enemy.size / 2) {
    unit = 25
    if (health1.hit === false) {
        health1.hit = true;
        user.x = 400;
        user.y = 800;
    }
    else if (health1.hit && (health2.hit === false)) {
      health2.hit = true;
      user.x = 400;
      user.y = 800;
    }
    else if (health1.hit && health2.hit && (health3.hit === false)) {
      health3.hit = true;
      user.x = 400;
      user.y = 800;
    }
    else if (health1.hit && health2.hit && health3.hit && (health4.hit === false)) {
      health4.hit = true;
      user.x = 400;
      user.y = 800;
    }
    else if (health1.hit && health2.hit && health3.hit && health4.hit && (health5.hit === false)) {
      health5.hit = true;
      state = 'levelHealthOut';
    }
  }
  if (enemy.mode === `waiting`) {
    if (dEnemy < enemy.followThreshold) {
    enemy.mode = `following`;
    }
    else if (enemy.mode = `following`) {
    }
  }
}

// Draw the heart
function displayHeart(health) {
  // Check if the heart is still available to behit/removed
  if (!health.hit) {
    // Display the heart as its position and with its size
    push();
    fill(255);
    square(health.x, health.y, health.size);
    pop();
  }
}

// Draw the truck
function displayTruck() {
  push();
  fill(255);
  rect(truck.x, truck.y, truck.w, truck.h);
  pop();
}
function checkTruck() {
  if (keyIsDown(69)) {
    let dTruck = dist(user.x, user.y, truck.x, truck.y);
    if (dTruck < user.size / 2 + truck.size / 2) {
      unit = 50
    }
  }
}

// Draw the user as a rectangle (Truck)
function displayUser2() {
  push();
  fill(255);
  square(user.x, user.y, 25);
  pop();
}
function displayLevel1() {
  push();
  fill(255);
  square(level1Map.x, level1Map.y, level1Map.size);
  pop();

  if (keyIsDown(69)) {
    let dLevel1 = dist(user.x, user.y, level1Map.x, level1Map.y);
    if (dLevel1 < user.size / 2 + level1Map.size / 2) {
      state = 'level1'
      timerValue = 59;
      user.x = 400;
      user.y = 800;
      tree1.cutDown = false;
    }
  }
}
function displayLevel2() {
  push();
  fill(255);
  square(75, 250, 50);
  pop();

  if (keyIsDown(69)) {
    let dLevel2 = dist(user.x, user.y, level2Map.x, level2Map.y);
    if (dLevel2 < user.size / 2 + level2Map.size / 2) {
      state = 'level2'
      timerValue = 59;
      user.x = 400;
      user.y = 800;
      tree1.cutDown = false;
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
