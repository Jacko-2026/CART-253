/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";


let lake = {
  x: 500,
  y: 500,
  size: 100,
  image: undefined
}

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
  },
    image: undefined
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
  },
    image: undefined
};

let enemy4 = {
  x: 0,
  y: 750,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 5,
  fill: {
    r: 255,
    g: 0,
    b: 0
  },
    image: undefined
};

let enemy5 = {
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
  },
    image: undefined
};

let user = {
  x: 500,
  y: 50,
  vx: 0,
  vy: 0,
  inputThreshold: 0,
  speed: 5,
  size: 90,
  fill: 255,
    image: undefined
};

let unit = 50;  // For user movement

let questItem = {
  x: 500,
  y: 900,
  size: 50,
  fill:{
    r: 0,
    g: 0,
    b: 255
  },
    image: undefined
}

let state = 'title';  // Can be title, level 1, level 2, level 3, etc

function preload() {
  lake.image = loadImage('assets/images/BACKGROUND.jpg')
  user.image = loadImage('assets/images/ToadBoy_03.gif')
  questItem.image = loadImage('assets/images/FLY_02.png')
  enemy1.image = loadImage('assets/images/LOG_03.png')
  enemy2.image = loadImage('assets/images/LOG_03.png')
  enemy3.image = loadImage('assets/images/LOG_03.png')
  enemy4.image = loadImage('assets/images/LOG_03.png')
  enemy5.image = loadImage('assets/images/LOG_03.png')
}

function setup() {
  createCanvas(1000, 1000);

  enemy1.vx = enemy1.speed;
  enemy2.vx = enemy2.speed;
  enemy3.vx = enemy3.speed;
  enemy4.vx = enemy4.speed;
  enemy5.vx = enemy5.speed;
}

function draw() {
  imageMode(CENTER);
    image(lake.image, lake.x, lake.y);

  if (state === 'title') {
    title();
  }
  else if (state === 'level1') {
    level1();
  }
  else if (state === 'level1Vic') {
    level1Vic();
  }
  else if (state === 'level2') {
    level2();
  }
  else if (state === 'level2Vic') {
    level2Vic();
  }
  else if (state === 'level3') {
    level3();
  }
  else if (state === 'level3Vic') {
    level3Vic();
  }
  else if (state === 'level4') {
    level4();
  }
  else if (state === 'level4Vic') {
    level4Vic();
  }

// Enemy movement
  // Enemy 1
  enemy1.x = enemy1.x + enemy1.vx;
  enemy1.y = enemy1.y + enemy1.vy;
  // Enemy 2
  enemy2.x = enemy2.x + enemy2.vx;
  enemy2.y = enemy2.y + enemy2.vy;
  if (enemy1.x > width) {
    enemy1.x = 0;
  }
  if (enemy2.x > width) {
    enemy2.x = 0;
  }
  if (enemy3.x > width) {
    enemy3.x = 0;
  }
  if (enemy4.x > width) {
    enemy4.x = 0;
  }
  if (enemy5.x > width) {
    enemy5.x = 0;
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
  // Enemy 4
  let d4 = dist(user.x, user.y, enemy4.x, enemy4.y);
  if (d4 < enemy4.size / 2 + user.size / 2) {
    noLoop();
  }
  // Enemy 5
  let d5 = dist(user.x, user.y, enemy5.x, enemy5.y);
  if (d5 < enemy5.size / 2 + user.size / 2) {
    noLoop();
  }

  user.x = constrain(user.x, 0, width);
  user.y = constrain(user.y, 0, height);

  handleInput();
  move();
}

function title() {
  push();
  textSize(100);
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

function level3Vic() {
  push();
  textSize(64);
  fill(200,100,100);
  textAlign(CENTER,CENTER);
  text('LEVEL 3: COMPLETE!',width/2,height/2);
  pop();
}

function level4Vic() {
  push();
  textSize(64);
  fill(200,100,100);
  textAlign(CENTER,CENTER);
  text('LEVEL 4: COMPLETE!',width/2,height/2);
  pop();
}

function level1() {
  move();
  display1();
  // Quest Item
  let dQ = dist(user.x, user.y, questItem.x, questItem.y);
  if (dQ < questItem.size / 2 + user.size / 2) {
    state = 'level1Vic';
  }
}

function level2() {
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

function level3() {
  move();
  display1();
  display2(); // Second Display
  display3(); // Third Display
  questItem.y = 900
  // Quest Item
  let dQ = dist(user.x, user.y, questItem.x, questItem.y);
  if (dQ < questItem.size / 2 + user.size / 2) {
    state = 'level3Vic';
  }
}
function level4() {
  move();
  display1();
  display2(); // Second Display
  display3(); // Third Display
  display4(); // Fourth Display
  questItem.y = 100
  // Quest Item
  let dQ = dist(user.x, user.y, questItem.x, questItem.y);
  if (dQ < questItem.size / 2 + user.size / 2) {
    state = 'level4Vic';
  }
}

function mousePressed() {
  if (state === 'title') {
    state = 'level1';
  }
  if (state === 'level1Vic') {
        state = 'level2';
  }
  if (state === 'level2Vic') {
        state = 'level3';
  }
  if (state === 'level3Vic') {
        state = 'level4';
  }
}

function display1() {

    // Display enemy 1 & 2
    imageMode(CENTER);
      image(enemy1.image, enemy1.x, enemy1.y);
    imageMode(CENTER);
      image(enemy2.image, enemy2.x, enemy2.y);

    // Display Quest Item
    imageMode(CENTER);
      image(questItem.image, questItem.x, questItem.y);

    // Display user
    imageMode(CENTER);
      image(user.image, user.x, user.y);
}

function display2() {
  imageMode(CENTER);
    image(enemy3.image, enemy3.x, enemy3.y);

    // Enemy 3
    enemy3.x = enemy3.x + enemy3.vx;
    enemy3.y = enemy3.y + enemy3.vy;
}

function display3() {
  imageMode(CENTER);
    image(enemy4.image, enemy4.x, enemy4.y);

    // Enemy 4
    enemy4.x = enemy4.x + enemy4.vx;
    enemy4.y = enemy4.y + enemy4.vy;
}

function display4() {
  imageMode(CENTER);
    image(enemy5.image, enemy5.x, enemy5.y);

    // Enemy 5
    enemy5.x = enemy5.x + enemy5.vx;
    enemy5.y = enemy5.y + enemy5.vy;
}

  // User Movement
  function handleInput() {
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

  function move() {
  user.x = user.x + user.vx;
  user.y = user.y + user.vy;
}

  function keyPressed() {
    if (key === '1') {
          state = 'level1';
          user.y = 100;
    }
    if (key === '2') {
          state = 'level2';
          user.y = 900;
    }
    if (key === '3') {
          state = 'level3';
          user.y = 100;
    }
    if (key === '4') {
          state = 'level4';
          user.y = 900;
    }

// Alternative Versions
    if (key === 'w') {
      user.image = loadImage('assets/images/Wizard.gif');
      questItem.image = loadImage('assets/images/Potion_02.gif');
      enemy1.image = loadImage('assets/images/Fireball_03.gif');
      enemy2.image = loadImage('assets/images/Fireball_03.gif');
      enemy3.image = loadImage('assets/images/Fireball_03.gif');
      enemy4.image = loadImage('assets/images/Fireball_03.gif');
      enemy5.image = loadImage('assets/images/Fireball_03.gif');
    }

  }
