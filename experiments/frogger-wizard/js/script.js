/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";


let enemy1 = {
  x: 0,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 5,
  fill: {
    r: 255,
    g: 0,
    b: 0
  }
};

let enemy2 = {
  x: 0,
  y: 650,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 8,
  fill: {
    r: 255,
    g: 0,
    b: 0
  }
};

let enemy3 = {
  x: 0,
  y: 450,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 10,
  fill: {
    r: 255,
    g: 0,
    b: 0
  }
};

let user = {
  x: 500,
  y: 50,
  vx: 0,
  vy: 0,
  speed: 5,
  size: 90,
  fill: 255
};

let questItem = {
  x: 500,
  y: 900,
  size: 50,
  fill:{
    r: 0,
    g: 0,
    b: 255
  }
}

let state = 'title';  // Can be title, simulation, level 1, level 2, etc

function setup() {
  createCanvas(1000, 1000);

  enemy1.vx = enemy1.speed;
  enemy2.vx = enemy2.speed;
  enemy3.vx = enemy3.speed;
}

function draw() {
  background(0);

  if (state === 'title') {
    title();
  }
  else if (state === 'simulation') {
    simulation();
  }
  else if (state === 'level1Vic') {
    level1Vic();
  }
  else if (state === 'level1') {
    level1();
  }
  else if (state === 'level2Vic') {
    level2Vic();
  }
  else if (state === 'level2') {
    level2();
  }

// Enemy movement
  // Enemy 1
  enemy1.x = enemy1.x + enemy1.vx;
  enemy1.y = enemy1.y + enemy1.vy;
  // Enemy 2
  enemy2.x = enemy2.x + enemy2.vx;
  enemy2.y = enemy2.y + enemy2.vy;
  // Enemy 3
  enemy3.x = enemy3.x + enemy3.vx;
  enemy3.y = enemy3.y + enemy3.vy;

  if (enemy1.x > width) {
    enemy1.x = 0;
  }
  if (enemy2.x > width) {
    enemy2.x = 0;
  }

  if (enemy3.x > width) {
    enemy3.x = 0;
  }

// Check for getting caught
  // Enemy 1
  let d1 = dist(user.x, user.y, enemy1.x, enemy1.y);
  if (d1 < enemy1.size / 2 + user.size / 2) {
    noLoop();
  }
  // Enemy 2
  let d2 = dist(user.x, user.y, enemy2.x, enemy2.y);
  if (d2 < enemy2.size / 2 + user.size / 2) {
    noLoop();
  }
  // Enemy 3
  let d3 = dist(user.x, user.y, enemy3.x, enemy3.y);
  if (d3 < enemy3.size / 2 + user.size / 2) {
    noLoop();
  }

  user.x = constrain(user.x, 0, width);
  user.y = constrain(user.y, 0, height);

  handleInput();
  move();
}

function title() {
  push();
  textSize(64);
  fill(200,100,100);
  textAlign(CENTER,CENTER);
  text('START',width/2,height/2);
  pop();
}

function level1Vic() {
  push();
  textSize(64);
  fill(200,100,100);
  textAlign(CENTER,CENTER);
  text('LEVEL 1: COMPLETE!',width/2,height/2);
  pop();
}

function level2Vic() {
  push();
  textSize(64);
  fill(200,100,100);
  textAlign(CENTER,CENTER);
  text('LEVEL 2: COMPLETE!',width/2,height/2);
  pop();
}

function simulation() {
  move();
  display1();
  // Quest Item
  let dQ = dist(user.x, user.y, questItem.x, questItem.y);
  if (dQ < questItem.size / 2 + user.size / 2) {
    state = 'level1Vic';
  }
}

function level1() {
  move();
  display1();
  display2(); // Second Display
  questItem.y = 100
  // Quest Item
  let dQ = dist(user.x, user.y, questItem.x, questItem.y);
  if (dQ < questItem.size / 2 + user.size / 2) {
    state = 'level2Vic';
  }
}

function level2() {
  move();
  display1();
  display2(); // Second Display
  questItem.y = 900
  // Quest Item
  let dQ = dist(user.x, user.y, questItem.x, questItem.y);
  if (dQ < questItem.size / 2 + user.size / 2) {
    state = 'level1Vic';
  }
}

function mousePressed() {
  if (state === 'title') {
    state = 'simulation';
  }
  if (state === 'level1Vic') {
        state = 'level1';
  }
  if (state === 'level2Vic') {
        state = 'level2';
  }
}

function display1() {

    // Display enemy 1 & 2
    fill(enemy1.fill.r, enemy1.fill.g, enemy1.fill.b);
    ellipse(enemy1.x, enemy1.y, enemy1.size);
    fill(enemy2.fill.r, enemy2.fill.g, enemy2.fill.b);
    ellipse(enemy2.x, enemy2.y, enemy2.size);

    // Display Quest Item
    fill(questItem.fill.r, questItem.fill.g, questItem.fill.b);
    square(questItem.x,questItem.y,questItem.size);

    // Display user
    fill(user.fill);
    ellipse(user.x, user.y, user.size);
}

function display2() {
      fill(enemy3.fill.r, enemy3.fill.g, enemy3.fill.b);
      ellipse(enemy3.x, enemy3.y, enemy3.size);
}

  // User Movement
  function handleInput() {
    if (keyIsDown(LEFT_ARROW)) {
      user.vx = -user.speed;
    }
    else if (keyIsDown(RIGHT_ARROW)) {
      user.vx = user.speed;
    }
    else {
      user.vx = 0
    }
    if (keyIsDown(UP_ARROW)) {
      user.vy = -user.speed;
    }
    else if (keyIsDown(DOWN_ARROW)) {
      user.vy = user.speed;
    }
    else {
      user.vy = 0;
    }
  }

  function move() {
  user.x = user.x + user.vx;
  user.y = user.y + user.vy;
}
