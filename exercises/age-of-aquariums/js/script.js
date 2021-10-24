/**
The Age of Aquariums
*/

"use strict";


let user = {
x: 0,
y: 0,
size: 75
}

let food1;
let food2;
let food3;
let food4;
let food5;
let food6;

let state = 'title'; // Can be: title, simulation,  love, sadness

function setup() {
  createCanvas(600, 600);

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
  background(0);

  if (state === 'title') {
    title();
  }
  else if (state === 'simulation') {
    simulation();
  }
  else if (state === 'ending') {
  ending();
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

// Display the user and foods

}

function title() {
  push();
  textSize(64);
  fill(200,100,100);
  textAlign(CENTER,CENTER);
  text('GO FISH!',width/2,height/2);
  pop();
}

function simulation() {
  checkOverlap();
  moveUser();
  displayUser();
  displayFood(food1);
  displayFood(food2);
  displayFood(food3);
  displayFood(food4);
  displayFood(food5);
  displayFood(food6);
}

function ending() {
  push();
  textSize(64);
  fill(150,255,150);
  textAlign(CENTER,CENTER);
  text('CONGRATS!',width/2,height/2);
  pop();
}

function checkOverlap() {
  if (food.eaten) {
    state = 'ending';
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
    fill(255, 100, 100);
    ellipse(food.x, food.y, food.size);
    pop();
  }
}
