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

let user = {
  x: 700,
  y: 50,
  vx: 0,
  vy: 0,
  speed: 5,
  size: 90,
  fill: 255
};

let state = 'title';

function setup() {
  createCanvas(windowWidth, windowHeight);

  enemy1.vx = enemy1.speed;
  enemy2.vx = enemy2.speed;
}

function draw() {
  background(0);

  if (state === 'title') {
    title();
  }
  else if (state === 'simulation') {
    simulation();
  }

  // Covid 19 movement
  enemy1.x = enemy1.x + enemy1.vx;
  enemy1.y = enemy1.y + enemy1.vy;
  enemy2.x = enemy2.x + enemy2.vx;
  enemy2.y = enemy2.y + enemy2.vy;

  if (enemy1.x > width) {
    enemy1.x = 0;
  }
  if (enemy2.x > width) {
    enemy2.x = 0;
  }

  // Check for catching covid19
  let d1 = dist(user.x, user.y, enemy1.x, enemy1.y);
  if (d1 < enemy1.size / 2 + user.size / 2) {
    noLoop();
  }
  let d2 = dist(user.x, user.y, enemy2.x, enemy2.y);
  if (d2 < enemy2.size / 2 + user.size / 2) {
    noLoop();
  }

  function title() {
    push();
    textSize(64);
    fill(200,100,100);
    textAlign(CENTER,CENTER);
    text('START',width/2,height/2);
    pop();
  }

  function simulation() {
    move();
    display();
  }

  handleInput();
  move();
}

function mousePressed() {
  if (state = 'title') {
    state = 'simulation';
  }
}

function display() {

    // Display covid 19
    fill(enemy1.fill.r, enemy1.fill.g, enemy1.fill.b);
    ellipse(enemy1.x, enemy1.y, enemy1.size);
    fill(enemy2.fill.r, enemy2.fill.g, enemy2.fill.b);
    ellipse(enemy2.x, enemy2.y, enemy2.size);

    // Display user
    fill(user.fill);
    ellipse(user.x, user.y, user.size);
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
