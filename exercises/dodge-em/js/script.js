/**
Exercise: Dodge-em
Jack Taddeo

Improvement/change ofthe COVID-19 “simulation” activity with a new interaction style, new visuals, and a new meaning
*/

"use strict";

let covid19 = {
  x: 0,
  y: 250,
  vx: 0,
  vy: 0,
  speed: 5,
  size: 100,
  image: undefined
};

let user = {
  x: 250,
  y: 250,
  vx: 0,
  vy: 0,
  speed: 5,
  size: 100,
  image: undefined
};

let img;

/**
Description of preload
*/
function preload() {
  img = loadImage('assets/images/HospitalFloor_01.jpg')
  covid19.image = loadImage('assets/images/Covid-19_5.gif')
  user.image = loadImage('assets/images/User_2.gif')
}


/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth,windowHeight);

  covid19.y = random(0,height);
  covid19.vx = covid19.speed;
}

/**
Description of draw()
*/
function draw() {
  background(0);

// Display Static
  for (let i = 0; i < 1000; i++) {
    let x = random(0,width);
    let y = random(0,height);
    stroke(255);
    point(x,y);
  }

// Covid19 Movement
  covid19.x = covid19.x + covid19.vx;
  covid19.y = covid19.y + covid19.vy;

  if (covid19.x > width) {
    covid19.x = 0;
    covid19.y = random(0,height);
  }

 imageMode(CENTER);
  image(covid19.image, covid19.x, covid19.y);

  imageMode(CENTER);
   image(user.image, user.x, user.y);

// Catching Covid 19
  let d = dist(user.x,user.y,covid19.x,covid19.y);
  if (d < covid19.size/2 + user.size/2) {
    user.image = loadImage ('assets/images/UserDead_1.gif')
    user.speed = 1
  }

  handleInput();
  move();

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
