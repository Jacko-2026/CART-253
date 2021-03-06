/**
The Age of Aquariums
*/

"use strict";


let user = {
x: 0,
y: 0,
size: 75
}

let r;

let food1;
let food2;
let food3;
let food4;
let food5;
let food6;

let state = 'title';

let foodGroup = (
  food1, food2, food3, food4, food5, food6
);

function setup() {
  createCanvas(600, 600);

let c =['#fcba03', '#fc4503', '#03fc41', '#03fcf8', '#a103fc', '#fc037b'];
r = random(c)

food1 = createFood(50, 50);
food2 = createFood(150, 300);
food3 = createFood(250, 250);
food4 = createFood(350, 350);
food5 = createFood(450, 300);
food6 = createFood(550, 550);
}

 function createFood(x,y) {
   let food = {
   x: x,
   y: y,
   size: 50,
   eaten: false
 };
   return food;
 }


function draw() {
  background(200);

  if (state === 'title') {
    title();
  }
  else if (state === 'simulation') {
    simulation();
  }
  else if (state === 'goodEnding') {
  goodEnding();
}
else if (state === 'badEnding') {
badEnding();
}

// Move the user (with the mouse)
moveUser();

// Check whether the user has eaten either food
checkFood(food1);
checkFood(food2);
checkFood(food3);
checkFood(food4);
checkFood(food5);
checkFood(food6);
}

function title() {
  push();
  textSize(64);
  fill(50,50,200);
  textAlign(CENTER,CENTER);
  text('GO FISH!',width/2,height/2);
  pop();
}

function simulation() {
  moveUser();
  displayUser();
  displayFood(food1);
  displayFood(food2);
  displayFood(food3);
  displayFood(food4);
  displayFood(food5);
  displayFood(food6);
  checkOverlap(foodGroup);
  // The Clock
  timer();
}

function timer() {
  frameRate(30);
    text(frameCount, width / 2, height / 2);
  textSize(30);
  if (frameCount > 125) {
    state = 'badEnding'
  }
}

function goodEnding() {
  push();
  textSize(64);
  fill(150,255,150);
  textAlign(CENTER,CENTER);
  text('CONGRATS!',width/2,height/2);
  pop();
}

function badEnding() {
  push();
  textSize(64);
  fill(255,50,50);
  textAlign(CENTER,CENTER);
  text('GAME OVER!',width/2,height/2);
  pop();
}

function checkOverlap(foodGroup) {
  if (food1.eaten && food2.eaten && food3.eaten && food4.eaten && food5.eaten && food6.eaten) {
    state = 'goodEnding';
  }
}

function mousePressed() {
  if (state === 'title') {
    state = 'simulation';
  }
}

// Sets the user position to the mouse position
function moveUser() {
  user.x = mouseX;
  user.y = mouseY;
}

// Checks if the user overlaps the food object and eats it if so
function checkFood(food) {
  if (!food.eaten) {
    let d = dist(user.x, user.y, food.x, food.y);
    if (d < user.size / 2 + food.size / 2) {
      food.eaten = true;
    }
  }
}

// Draw the user as a circle
function displayUser() {
  push();
  fill(255);
  ellipse(user.x, user.y, user.size);
  pop();
}

// Draw the food as a circle
function displayFood(food) {
  // Check if the food is still available to be eaten
  if (!food.eaten) {
    // Display the food as its position and with its size
    push();
    fill(r);
    ellipse(food.x, food.y, food.size);
    pop();
  }
}
