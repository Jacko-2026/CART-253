/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let state = 'title';

let iText = ``;
let tutText = ``;
let shopText = '';

let mouseImage1;
let mouse = {
  x: 0,
  y: 0,
  size: 50,
  image: mouseImage1
}

let userBack;
let userFront;
let userLeft;
let userRight;

let user = {
  x: 400,
  y: 700,
  vx: 0,
  vy: 0,
  inputThreshold: 0,
  speed: 5,
  size: 60,
  image: userBack
}
let unit = 50; // For user movement

let health1;
let health2;
let health3;
let health4;
let health5;
let healthBar = (
  health1, health2, health3, health4, health5
);
let healthImage1;

let goldImage;
let goldAmount = 0;
let gold = {
  x: 750,
  y: 35,
  size: 15,
  image: goldImage
}

let antidoteImage;
let antidoteImage2;
let antidoteAmount = 0;
let antidote = {
  x: 100,
  y: 150,
  size: 50,
  image: antidoteImage
}
let knifeImage;
let knifeImage2;
let knifeAmount = 0;
let knife = {
  x: 400,
  y: 150,
  size: 50,
  image: knifeImage
}
let trapImage;
let trapImage2;
let trapAmount = 0;
let trap = {
  x: 700,
  y: 150,
  size: 50,
  image: trapImage
}
let foodImage;
let foodImage2;
let foodAmount = 0;
let food = {
  x: 400,
  y: 550,
  size: 50,
  image: foodImage
}
let food2 = {
  x: 175,
  y: 760,
  size: 50,
  image: foodImage2
}

let tree1;
let tree2;
let tree3;
let treeGroup = (
  tree1, tree2, tree3
);
let treeImage1;

// Enemies (Snakes)
let snake1;
let snake2;
let snakeImage;

let truckImage;
let truck = {
  x: 700,
  y: 700,
  size: 100,
  image: truckImage
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
let level3Map = {
  x: 125,
  y: 400,
  size: 50
}
let level4Map = {
  x: 450,
  y: 200,
  size: 50
}

// Timer
let timerValue = 10;

let cuttingMusic, walkingMusic, truckMusic;

function preload() {
  treeImage1 = loadImage('assets/images/Tree.png');

  snakeImage = loadImage('assets/images/02/Snake.gif');

  healthImage1 = loadImage('assets/images/Heart_Full.png');

  goldImage = loadImage('assets/images/02/Gold.png');
  gold.image = goldImage;

  antidoteImage = loadImage('assets/images/02/Antidote.png');
  antidoteImage2 = loadImage('assets/images/02/Antidote copy.png');
  antidote.image = antidoteImage;
  knifeImage = loadImage('assets/images/02/Knife.png');
  knifeImage2 = loadImage('assets/images/02/Knife copy.png');
  knife.image = knifeImage;
  trapImage = loadImage('assets/images/02/Trap.png');
  trapImage2 = loadImage('assets/images/02/Trap copy.png');
  trap.image = trapImage;
  foodImage = loadImage('assets/images/Food.png');
  foodImage2 = loadImage('assets/images/02/Food copy.png');
  food.image = foodImage;
  food2.image = foodImage2;

  truckImage = loadImage('assets/images/02/Truck_01.png');
  truck.image = truckImage;

  userBack = loadImage('assets/images/user/Back.gif');
  userFront = loadImage('assets/images/user/Front.gif');
  userLeft = loadImage('assets/images/user/Side(Left).gif');
  userRight = loadImage('assets/images/user/Side(Right).gif');
  user.image = userBack;

  mouseImage1 = loadImage('assets/images/Mouse.png');
  mouse.image = mouseImage1;

  // Music
  soundFormats('wav');
  cuttingMusic = loadSound('assets/sounds/Wood');
  walkingMusic = loadSound('assets/sounds/Walk');
  truckMusic = loadSound('assets/sounds/Truck');
}


function setup() {
  // Create Timer
  push();
  textAlign(400, 100);
  setInterval(timeIt, 1000);
  pop();

  // Create Trees
  tree1 = createTree(50, 80);
  tree2 = createTree(275, 450);

  // Create Enemies
  snake1 = createSnake(250, 350);
  snake2 = createSnake(350, 450);

  // Create Health Bar
  health1 = createHealth(180, 15);
  health2 = createHealth(140, 15);
  health3 = createHealth(100, 15);
  health4 = createHealth(60, 15);
  health5 = createHealth(20, 15);
}

function createTree(x, y) {
  let tree = {
    x: x,
    y: y,
    size: 15,
    cutDown: false,
    image: treeImage1
  };
  return tree;
}

function createSnake(x, y) {
  let snake = {
    x: x,
    y: y,
    vx: 0,
    vy: 0,
    speed: 6,
    size: 50,
    dead: false,
    image: snakeImage
  };
  return snake;
}

function createHealth(x, y) {
  let health = {
    x: x,
    y: y,
    hit: false,
    image: healthImage1
  };
  return health;
}

function draw() {
  createCanvas(800, 800);
  background(51);

  push();
  textSize(15);
  fill(200, 100, 100);
  textAlign(LEFT);
  text(iText, 620, 55);
  pop();

  // Screens/States
  if (state === 'title') {
    title();
  } else if (state === 'shop') {
    shop();
  } else if (state === 'tutPart1') {
    tutPart1();
  } else if (state === 'tutPart2') {
    tutPart2();
  } else if (state === 'tutPart3') {
    tutPart3();
  } else if (state === 'tutPart4') {
    tutPart4();
  } else if (state === 'level1') {
    level1();
  } else if (state === 'level2') {
    level2();
  } else if (state === 'level3') {
    level3();
  } else if (state === 'level4') {
    level4();
  } else if (state === 'levelVic') {
    levelVic();
  } else if (state === 'levelGameOver') {
    levelGameOver();
  } else if (state === 'levelHealthOut') {
    levelHealthOut();
  } else if (state === 'levelsMap') {
    levelsMap();
  }

  // Constrain User to Canvas
  user.x = constrain(user.x, 0, width);
  user.y = constrain(user.y, 0, height);
  // Move the user (with arrow keys)
  moveUser();

  // Check whether the user has cut down a tree
  checkTree(tree1);
  checkTree(tree2);

  checkTruck();

  moveMouse();
  displayMouse();
}


function moveMouse() {
  mouse.x = mouseX;
  mouse.y = mouseY;

  mouse.x = constrain(mouse.x, 0, width);
  mouse.y = constrain(mouse.y, 0, height);
}

function displayMouse() {
  imageMode(CENTER);
  image(mouse.image, mouse.x, mouse.y);
}


// Levels +Title Screen & Victory Screens
function title() {
  push();
  textSize(100);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text('START', width / 2, height / 2);
  pop();

  push();
  textSize(25);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text('[PRESS "ENTER"]', width / 2, 725);
  pop();

  if ((state === 'title') && (keyIsDown(13))) {
    state = 'tutPart1';
  }
}

function shop() {
  push();
  textSize(100);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text('[SHOP]', width / 2, height / 2);
  pop();

  shopText = '[PRESS "ENTER" TO EXIT]'
  push();
  textSize(20);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text(shopText, width / 2, 750);
  pop();

  displayGold();

  // Items
  displayAntidote();
  displayKnife();
  displayTrap();
  displayFood();

  // Antidote Price
  push();
  textSize(35);
  fill(200, 100, 100);
  text('10', 80, 310);
  pop();
  // Knife Price
  push();
  textSize(35);
  fill(200, 100, 100);
  text('15', 380, 310);
  pop();
  // Trap Price
  push();
  textSize(35);
  fill(200, 100, 100);
  text('5', 675, 310);
  pop();
  // Food Price
  push();
  textSize(35);
  fill(200, 100, 100);
  text('5', 390, 650);
  pop();

  let dAntidote = dist(mouse.x, mouse.y, antidote.x, antidote.y);
  let dKnife = dist(mouse.x, mouse.y, knife.x, knife.y);
  let dTrap = dist(mouse.x, mouse.y, trap.x, trap.y);
  let dFood = dist(mouse.x, mouse.y, food.x, food.y);
  if (dAntidote < mouse.size / 2 + antidote.size / 2) {
    shopText = '[PREVENTS SNAKE ATTACKS ONCE]'
  } else if (dKnife < mouse.size / 2 + knife.size / 2) {
    shopText = '[KILLS AN ENEMY SNAKES WHEN ATTACKED]'
  } else if (dTrap < mouse.size / 2 + trap.size / 2) {
    shopText = '[STOPS AN ENEMY SNAKES IN THEIR TRACKS WHEN ATTACKED]'
  } else if (dFood < mouse.size / 2 + food.size / 2) {
    shopText = '[RESTORES HEALTH]'
  }
}

function tutPart1() {
  push();
  textSize(25);
  fill(200, 100, 100);
  textAlign(LEFT);
  text('You are a lumberjack in the year 19XX,', 0, 100);
  text('With the recent economic boom,', 0, 150);
  text('Wood is in high demand to build new homes.', 0, 175);
  text('You must travel further and further from the village', 0, 225);
  text('To collect wood to sell.', 0, 250);
  text('However, there are dangers to travelling to far out of the village,', 0, 300);
  text('Beware of snakes, moose, and bears as they will attack you on sight.', 0, 325);
  pop();

  push();
  textSize(20);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text('[RIGHT-ARROW]', width / 2, 725);
  pop();

  keyReleased()
}

function tutPart2() {
  push();
  textSize(25);
  fill(200, 100, 100);
  textAlign(LEFT);
  text('There are several types of trees you may cut down,', 0, 100);
  text('Each type provides you with different levels of gold and or upgrades.', 0, 150);
  text('With gold you can buy gas for your truck, first aid for your health,', 0, 200);
  text('Food for your energy, tool upgrades, and so on.', 0, 225);
  pop();

  push();
  textSize(20);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text('[LEFT-ARROW]', width / 2, 725);
  pop();

  push();
  textSize(20);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text('[LEFT-ARROW]', width / 2, 725);
  pop();

  keyReleased()
}

function tutPart3() {
  push();
  textSize(25);
  fill(200, 100, 100);
  textAlign(LEFT);
  text('Use the arrow keys to move your character,', 0, 100);
  text('The mouse to progress through levels and the buy menu,', 0, 150);
  text('And use “e” as a way to interact with trees, the truck, levels, etc.', 0, 200);
  pop();

  push();
  textSize(20);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text('[RIGHT-ARROW]', width / 2, 725);
  pop();

  keyReleased()
}

function tutPart4() {
  push();
  textSize(25);
  fill(200, 100, 100);
  textAlign(LEFT);
  text('You can press “i” at any moment', 0, 100);
  text('To bring up a short tutorial', 0, 150);
  text('If you need help.', 0, 200);
  pop();

  push();
  textSize(20);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text('[CLICK TO BEGIN]', width / 2, 725);
  pop();

  keyReleased()
}

function keyReleased() {
  if ((keyCode === RIGHT_ARROW) && (state === 'tutPart1')) {
    state = 'tutPart2';
  } else if ((keyCode === LEFT_ARROW) && (state === 'tutPart2')) {
    state = 'tutPart3';
  } else if ((keyCode === RIGHT_ARROW) && (state === 'tutPart3')) {
    state = 'tutPart4';
  }
}

function level1() {
  tutText = '[USE THE "ARROW KEYS" TO MOVE]'
  let dTree1 = dist(user.x, user.y, tree1.x, tree1.y);
  if (dTree1 < user.size / 2 + tree1.size / 2) {
    tutText = '[PRESS "E" TO CUT DOWN TREES]'
  } else if (tree1.cutDown === true) {
    tutText = '[PRESS "E" NEAR THE TRUCK TO PROGRESS]'
  }

  push();
  textSize(54);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text('[LEVEL 1]', width / 2, height / 2);
  pop();

  push();
  textSize(20);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text(tutText, width / 2, 775);
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

  // Display Gold
  displayGold();
  checkGold();

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

  if (antidoteAmount > 0) {
    antidote.image = antidoteImage2;
    imageMode(CENTER);
    image(antidote.image, 25, 760);
  }
  if (knifeAmount > 0) {
    knife.image = knifeImage2;
    imageMode(CENTER);
    image(knife.image, 75, 760);
  }
  if (trapAmount > 0) {
    trap.image = trapImage2;
    imageMode(CENTER);
    image(trap.image, 125, 760);
  }
  if (foodAmount > 0) {
  food2.image = foodImage2;
    imageMode(CENTER);
    image(food2.image, food2.x, food2.y);
  }
}

function level2() {
  push();
  textSize(54);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text('[LEVEL 2]', width / 2, height / 2);
  pop();

  // User
  displayUser();
  moveUser();

  // Display Trees
  displayTree(tree1);
  tree1.x = 100
  tree1.y = 175
  displayTree(tree2);

  // Display Hearts
  displayHeart(health1);
  displayHeart(health2);
  displayHeart(health3);
  displayHeart(health4);
  displayHeart(health5);

  // Display Gold
  displayGold();
  checkGold();

  // Display Truck
  displayTruck();

  // Timer
  displayTimer();

  //// Checks if the user has cut down tree1, if yes then they may leave via the truck
  let dTruck = dist(user.x, user.y, truck.x, truck.y);
  if ((dTruck < user.size / 2 + truck.size / 2) && (tree1.cutDown === true) && (tree2.cutDown === true) && (keyIsDown(69)) && (unit === 50)) {
    state = 'levelVic';
  }
  if (timerValue == 0) {
    state = 'levelGameOver';
  }

  if (antidoteAmount > 0) {
    antidote.image = antidoteImage2;
    imageMode(CENTER);
    image(antidote.image, 25, 760);
  }
  if (knifeAmount > 0) {
    knife.image = knifeImage2;
    imageMode(CENTER);
    image(knife.image, 75, 760);
  }
  if (trapAmount > 0) {
    trap.image = trapImage2;
    imageMode(CENTER);
    image(trap.image, 125, 760);
  }
  if (foodAmount > 0) {
  food2.image = foodImage2;
    imageMode(CENTER);
    image(food2.image, food2.x, food2.y);
  }
}

function level3() {
  push();
  textSize(54);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text('[LEVEL 3]', width / 2, height / 2);
  pop();

  // User
  displayUser();
  moveUser();

  // Display enemy
  displaySnake(snake1);
  // Check if the user has been attacked by an enemy
  checkSnake(snake1);
  // Enemy movement
  // Snake 1
  snake1.vx = snake1.speed;
  snake1.x = snake1.x + snake1.vx;
  snake1.y = snake1.y + snake1.vy;
  if (snake1.x > width) {
    snake1.x = 0;
    snake1.y = random(200, 600);
  }

  // Display Trees
  displayTree(tree1);
  tree1.x = 100
  tree1.y = 275
  displayTree(tree2);
  tree2.x = 500
  tree2.y = 450

  // Display Hearts
  displayHeart(health1);
  displayHeart(health2);
  displayHeart(health3);
  displayHeart(health4);
  displayHeart(health5);

  // Display Gold
  displayGold();
  checkGold();

  // Display Truck
  displayTruck();

  // Timer
  displayTimer();

  //// Checks if the user has cut down tree1, if yes then they may leave via the truck
  let dTruck = dist(user.x, user.y, truck.x, truck.y);
  if ((dTruck < user.size / 2 + truck.size / 2) && (tree1.cutDown === true) && (tree2.cutDown === true) && (keyIsDown(69)) && (unit === 50)) {
    state = 'levelVic';
  }
  if (timerValue == 0) {
    state = 'levelGameOver';
  }

  if (antidoteAmount > 0) {
    antidote.image = antidoteImage2;
    imageMode(CENTER);
    image(antidote.image, 25, 760);
  }
  if (knifeAmount > 0) {
    knife.image = knifeImage2;
    imageMode(CENTER);
    image(knife.image, 75, 760);
  }
  if (trapAmount > 0) {
    trap.image = trapImage2;
    imageMode(CENTER);
    image(trap.image, 125, 760);
  }
  if (foodAmount > 0) {
  food2.image = foodImage2;
    imageMode(CENTER);
    image(food2.image, food2.x, food2.y);
  }
}

function level4() {
  push();
  textSize(54);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text('[LEVEL 4]', width / 2, height / 2);
  pop();

  // User
  displayUser();
  moveUser();

  // Display enemy
  displaySnake(snake1);
  // Check if the user has been attacked by an enemy
  checkSnake(snake1);
  // Enemy movement
  // Snake 1
  snake1.vx = snake1.speed;
  snake1.x = snake1.x + snake1.vx;
  snake1.y = snake1.y + snake1.vy;
  if (snake1.x > width) {
    snake1.x = 0;
    snake1.y = random(200, 600);
  }
  displaySnake(snake2);
  // Check if the user has been attacked by an enemy
  checkSnake(snake2);
  // Enemy movement
  // Snake 2
  snake2.vx = snake2.speed;
  snake2.x = snake2.x + snake2.vx;
  snake2.y = snake2.y + snake2.vy;
  if (snake2.x > width) {
    snake2.x = 0;
    snake2.y = random(200, 600);
  }

  // Display Trees
  displayTree(tree1);
  tree1.x = 250
  tree1.y = 175
  displayTree(tree2);
  tree2.x = 600
  tree2.y = 350

  // Display Hearts
  displayHeart(health1);
  displayHeart(health2);
  displayHeart(health3);
  displayHeart(health4);
  displayHeart(health5);

  // Display Gold
  displayGold();
  checkGold();

  // Display Truck
  displayTruck();

  // Timer
  displayTimer();

  //// Checks if the user has cut down tree1, if yes then they may leave via the truck
  let dTruck = dist(user.x, user.y, truck.x, truck.y);
  if ((dTruck < user.size / 2 + truck.size / 2) && (tree1.cutDown === true) && (tree2.cutDown === true) && (keyIsDown(69)) && (unit === 50)) {
    state = 'levelVic';
  }
  if (timerValue == 0) {
    state = 'levelGameOver';
  }

  if (antidoteAmount > 0) {
    antidote.image = antidoteImage2;
    imageMode(CENTER);
    image(antidote.image, 25, 760);
  }
  if (knifeAmount > 0) {
    knife.image = knifeImage2;
    imageMode(CENTER);
    image(knife.image, 75, 760);
  }
  if (trapAmount > 0) {
    trap.image = trapImage2;
    imageMode(CENTER);
    image(trap.image, 125, 760);
  }
  if (foodAmount > 0) {
  food2.image = foodImage2;
    imageMode(CENTER);
    image(food2.image, food2.x, food2.y);
  }
}

// Victory screen shown after every level (Once it's completed properly)
function levelVic() {
  push();
  textSize(64);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text('LEVEL COMPLETE!', width / 2, height / 2);
  pop();

  push();
  textSize(25);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text('[CLICK TO CONTINUE]', width / 2, 725);
  pop();
}
// If the user runs out of time, the level ends and resets to the levelsMap
function levelGameOver() {
  push();
  textSize(32);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text('UH OH, YOU RAN OUT OF TIME!', width / 2, height / 2);
  pop();

  if (keyIsDown(13)) {
    state = 'levelsMap';
    user.x = 700;
    user.y = 700;
  }
}
// If the user runs out of health, the level ends and resets to the levelsMap
function levelHealthOut() {
  push();
  textSize(32);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text('UH OH, YOU RAN OUT OF HEALTH!', width / 2, height / 2);
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
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text('[MAP]', width / 2, height / 2);
  pop();

  push();
  textSize(20);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text('[PRESS "E" TO START A LEVEL]', width / 2, 750);
  pop();

  // Display Gold
  displayGold();

  // Level Selection
  displayLevel1();
  displayLevel2();
  displayLevel3();
  displayLevel4();
  displayUser2();
}


function mousePressed() {
  if (state === 'tutPart4') {
    state = 'level1';
    timerValue = 59;
  }
  if (state === 'levelVic') {
    state = 'levelsMap';
    truckMusic.play();
    user.x = 700;
    user.y = 700;
  }
  // Shop (Buying Items)
  let dMouse = dist(mouse.x, mouse.y, gold.x, gold.y);
  if (dMouse < mouse.size / 2 + gold.size / 2) {
    state = 'shop';
  }

  let dAntidote = dist(mouse.x, mouse.y, antidote.x, antidote.y);
  if ((dAntidote < mouse.size / 2 + antidote.size / 2) && (goldAmount > 9)) {
    goldAmount -= 10;
    antidoteAmount += 1;
  }
  let dKnife = dist(mouse.x, mouse.y, knife.x, knife.y);
  if ((dKnife < mouse.size / 2 + knife.size / 2) && (goldAmount > 14)) {
    goldAmount -= 15;
    knifeAmount += 1;
  }
  let dTrap = dist(mouse.x, mouse.y, trap.x, trap.y);
  if ((dTrap < mouse.size / 2 + trap.size / 2) && (goldAmount > 4)) {
    goldAmount -= 5;
    trapAmount += 1;
  }
  let dFood = dist(mouse.x, mouse.y, food.x, food.y);
  if ((dFood < mouse.size / 2 + food.size / 2) && (goldAmount > 4)) {
    goldAmount -= 5;
    foodAmount += 1;
  }
  let dFood2 = dist(mouse.x, mouse.y, food2.x, food2.y);
  if ((dFood2 < mouse.size / 2 + food2.size / 2) && (foodAmount > 0) && (health1.hit || health2.hit || health3.hit || health4.hit || health5.hit)) {
    health1.hit = false;
    health2.hit = false;
    health3.hit = false;
    health4.hit = false;
    health5.hit = false;
    foodAmount -= 1;
    unit = 50;
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
  imageMode(CENTER);
  image(user.image, user.x, user.y);
}

// Draw the tree
function displayTree(tree) {
  // Check if the tree is still available to be cut down
  if (!tree.cutDown) {
    // Display the tree as its position and with its size
    imageMode(CENTER);
    image(tree.image, tree.x, tree.y);
  }
}
// Checks if the user overlaps the tree object and cuts it down if so
function checkTree(tree) {
  if ((!tree.cutDown) && (keyIsDown(69))) {
    let dTree = dist(user.x, user.y, tree.x, tree.y);
    if (dTree < user.size / 2 + tree.size / 2) {
      tree.cutDown = true;
      unit = 25
      cuttingMusic.play();
    }
  }
}
// Draw the enemy
function displaySnake(snake) {
  if (!snake.dead) {
    imageMode(CENTER);
    image(snake.image, snake.x, snake.y);
  }
}

function checkSnake(snake) {
  if (snake.dead) {
    return;
  }

  let dEnemy = dist(user.x, user.y, snake.x, snake.y);
  if ((dEnemy < user.size / 2 + snake.size / 2) && (snake.dead === false)) {
    unit = 25
    if (health1.hit === false) {
      health1.hit = true;
      user.x = 400;
      user.y = 700;
    } else if (health1.hit && (health2.hit === false)) {
      health2.hit = true;
      user.x = 400;
      user.y = 700;
    } else if (health1.hit && health2.hit && (health3.hit === false)) {
      health3.hit = true;
      user.x = 400;
      user.y = 700;
    } else if (health1.hit && health2.hit && health3.hit && (health4.hit === false)) {
      health4.hit = true;
      user.x = 400;
      user.y = 700;
    } else if (health1.hit && health2.hit && health3.hit && health4.hit && (health5.hit === false)) {
      health5.hit = true;
      state = 'levelHealthOut';
    }
  }
  if ((dEnemy < user.size / 2 + snake.size / 2) && (antidoteAmount > 0)) {
    health1.hit = false;
    health2.hit = false;
    health3.hit = false;
    health4.hit = false;
    health5.hit = false;
    user.x = 400;
    user.y = 700;
    antidoteAmount -= 1;
  }
  if ((dEnemy < user.size / 2 + snake.size / 2) && (knifeAmount > 0) && (!snake.dead)) {
    snake.dead = true;
    health1.hit = false;
    health2.hit = false;
    health3.hit = false;
    health4.hit = false;
    health5.hit = false;
    user.x = 400;
    user.y = 700;
    knifeAmount -= 1;
    goldAmount += 10;
  }
  if ((dEnemy < user.size / 2 + snake.size / 2) && (trapAmount > 0) && (!snake.dead)) {
    snake.speed = 0;
    user.x = 400;
    user.y = 700;
    trapAmount -= 1;
    goldAmount += 5;
  }
}

// Draw the heart
function displayHeart(health) {
  // Check if the heart is still available to behit/removed
  if (!health.hit) {
    // Display the heart as its position and with its size
    imageMode(CENTER);
    image(health.image, health.x, health.y);
  }
}

// Draw the gold
function displayGold() {
  imageMode(CENTER);
  image(gold.image, gold.x, gold.y);

  push();
  textSize(20);
  fill(200, 100, 100);
  text(goldAmount, 700, 45);
  pop();
}
// Check the amount of gold
function checkGold() {
  if ((tree1.cutDown == true || tree2.cutDown == true) && (unit === 50)) {
    goldAmount += 5;
  }
  if ((tree1.cutDown == true && tree2.cutDown == true) && (unit === 50)) {
    goldAmount += 5;
  }
}

function displayAntidote() {
  antidote.image = antidoteImage;
  imageMode(CENTER);
  image(antidote.image, antidote.x, antidote.y);
}

function displayKnife() {
  knife.image = knifeImage;
  imageMode(CENTER);
  image(knife.image, knife.x, knife.y);
}

function displayTrap() {
  trap.image = trapImage;
  imageMode(CENTER);
  image(trap.image, trap.x, trap.y);
}

function displayFood() {
  food.image = foodImage;
  imageMode(CENTER);
  image(food.image, food.x, food.y);
}

// Draw the truck
function displayTruck() {
  imageMode(CENTER);
  image(truck.image, truck.x, truck.y);
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
  fill(140, 0, 26);
  square(user.x, user.y, 25);
  pop();
}

function displayLevel1() {
  push();
  fill(255);
  rectMode(CENTER);
  square(level1Map.x, level1Map.y, level1Map.size);
  pop();

  push();
  textSize(level1Map.size);
  textAlign(CENTER, CENTER);
  fill(200, 100, 100);
  text('1', level1Map.x, level1Map.y);
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
  rectMode(CENTER);
  square(75, 250, 50);
  pop();

  push();
  textSize(level2Map.size);
  textAlign(CENTER, CENTER);
  fill(200, 100, 100);
  text('2', level2Map.x, level2Map.y);
  pop();

  if (keyIsDown(69)) {
    let dLevel2 = dist(user.x, user.y, level2Map.x, level2Map.y);
    if (dLevel2 < user.size / 2 + level2Map.size / 2) {
      state = 'level2'
      timerValue = 59;
      user.x = 400;
      user.y = 800;
      tree1.cutDown = false;
      tree2.cutDown = false;
    }
  }
}

function displayLevel3() {
  push();
  fill(255);
  rectMode(CENTER);
  square(level3Map.x, level3Map.y, level3Map.size);
  pop();

  push();
  textSize(level3Map.size);
  textAlign(CENTER, CENTER);
  fill(200, 100, 100);
  text('3', level3Map.x, level3Map.y);
  pop();

  if (keyIsDown(69)) {
    let dLevel3 = dist(user.x, user.y, level3Map.x, level3Map.y);
    if (dLevel3 < user.size / 2 + level3Map.size / 2) {
      snake1.dead = false;
      snake1.speed = 6;
      state = 'level3'
      timerValue = 59;
      user.x = 400;
      user.y = 800;
      tree1.cutDown = false;
      tree2.cutDown = false;
    }
  }
}

function displayLevel4() {
  push();
  fill(255);
  rectMode(CENTER);
  square(level4Map.x, level4Map.y, level4Map.size);
  pop();

  push();
  textSize(level4Map.size);
  textAlign(CENTER, CENTER);
  fill(200, 100, 100);
  text('4', level4Map.x, level4Map.y);
  pop();

  if (keyIsDown(69)) {
    let dLevel4 = dist(user.x, user.y, level4Map.x, level4Map.y);
    if (dLevel4 < user.size / 2 + level4Map.size / 2) {
      snake1.dead = false;
      snake2.dead = false;
      snake1.speed = 6;
      snake2.speed = 6;
      state = 'level4'
      timerValue = 59;
      user.x = 400;
      user.y = 800;
      tree1.cutDown = false;
      tree2.cutDown = false;
    }
  }
}

// User Movement 01
function moveUser() {
  if (keyIsDown(RIGHT_ARROW)) {
    user.inputThreshold += 0.05;
  }
  if (user.inputThreshold >= 1) {
    user.x += unit;
    user.inputThreshold = 0;
    user.image = userRight;
    walkingMusic.play();
  }
  if (keyIsDown(LEFT_ARROW)) {
    user.inputThreshold += 0.05;
  }
  if (user.inputThreshold >= 1) {
    user.x += -unit;
    user.inputThreshold = 0;
    user.image = userLeft;
    walkingMusic.play();
  }
  if (keyIsDown(UP_ARROW)) {
    user.inputThreshold += 0.05;
  }
  if (user.inputThreshold >= 1) {
    user.y += -unit;
    user.inputThreshold = 0;
    user.image = userBack;
    walkingMusic.play();
  }
  if (keyIsDown(DOWN_ARROW)) {
    user.inputThreshold += 0.05;
  }
  if (user.inputThreshold >= 1) {
    user.y += unit;
    user.inputThreshold = 0;
    user.image = userFront;
    walkingMusic.play();
  }
}
// User Movement 02
function move() {
  user.x = user.x + user.vx;
  user.y = user.y + user.vy;
}


function keyPressed() {
  // Cheat Codes (For ease of movement between states during development)
  if (keyCode === 49) {
    state = 'level1';
    tree1.x = 50
    tree1.y = 80
    tree1.cutDown = false;
    timerValue = 59;
    health1.hit = false;
    health2.hit = false;
    health3.hit = false;
    health4.hit = false;
    health5.hit = false;
    user.x = 400;
    user.y = 700;
    user.image = userBack;
  } else if (keyCode === 50) {
    state = 'level2';
    tree1.cutDown = false;
    tree2.cutDown = false;
    tree2.x = 275
    tree2.y = 450
    timerValue = 59;
    health1.hit = false;
    health2.hit = false;
    health3.hit = false;
    health4.hit = false;
    health5.hit = false;
    user.x = 400;
    user.y = 700;
    user.image = userBack;
  } else if (keyCode === 51) {
    state = 'level3';
    snake1.dead = false;
    snake1.speed = 6;
    tree1.cutDown = false;
    tree2.cutDown = false;
    timerValue = 59;
    health1.hit = false;
    health2.hit = false;
    health3.hit = false;
    health4.hit = false;
    health5.hit = false;
    user.x = 400;
    user.y = 700;
    user.image = userBack;
  } else if (keyCode === 52) {
    state = 'level4';
    snake1.dead = false;
    snake2.dead = false;
    snake1.speed = 6;
    snake2.speed = 6;
    tree1.cutDown = false;
    tree2.cutDown = false;
    timerValue = 59;
    health1.hit = false;
    health2.hit = false;
    health3.hit = false;
    health4.hit = false;
    health5.hit = false;
    user.x = 400;
    user.y = 700;
    user.image = userBack;
  }
  // Full Health Cheat Code
  else if (keyCode === 107) {
    health1.hit = false;
    health2.hit = false;
    health3.hit = false;
    health4.hit = false;
    health5.hit = false;
  }
  // Max Timer Cheat Code
  else if (keyCode === 109) {
    timerValue = 1000;
  }
  // Add Gold Cheat Code
  else if (keyCode === 111) {
    goldAmount += 5;
  }
  // Brief Tutorial
  else if ((keyCode === 73) && (iText === ``)) {
    iText = `
[Cut down trees (e),
avoid enemies,
& use the truck (ENTER)
to progress]`;
  } else if ((keyCode === 73) && (iText === `[HOWDY]`)) {
    iText = ``;
  }
  // Shop Menu (For Buying Items)
  else if ((keyCode === 13) && (state === 'shop')) {
    state = 'levelsMap';
    user.x = 700;
    user.y = 700;
  }
}
