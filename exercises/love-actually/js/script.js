// User (Playable )
let circle1 = {
  x: undefined,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 3,
  image: undefined
};

// Comp (Computer)
let circle2 = {
  x: undefined,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 5,
  image: undefined
};

let img;
let imgUser;
let imgComp;

let state = 'title'; // Can be: title, simulation,  love, sadness

function preload() {
  circle1.image = loadImage('assets/images/User_3.gif')
  circle2.image = loadImage('assets/images/Comp_3.gif')

  img = loadImage('assets/images/SadEnding.gif');
  imgUser = loadImage('assets/images/User_3.gif');
  imgComp = loadImage('assets/images/Comp_3.gif');
}

function setup() {
  createCanvas(500,500);
  setupCircles();
}

function setupCircles() {
  // Position Circles seperated from one another
    circle1.x = width / 3;
    circle2.x = 2 * width / 3;

  // Start Circles moving in a random direction
    circle1.vx = random(-circle1.speed,circle1.speed);
    circle1.vy = random(-circle1.speed,circle1.speed);
    circle2.vx = random(-circle2.speed,circle2.speed);
    circle2.vy = random(-circle2.speed,circle2.speed);
}

function draw() {
  background(0);
  userMovement();

  if (state === 'title') {
    title();
  }
  else if (state === 'simulation') {
    simulation();
  }
  else if (state === 'love') {
    love();
  }
  else if (state === 'sadness') {
    sadness();
  }
  else if (state === 'secret') {
    secret();
  }
}

function title() {
  push();
  textSize(64);
  fill(200,100,100);
  textAlign(CENTER,CENTER);
  text('LOVE?',width/2,height/2);
  pop();
}

function simulation() {
  move();
  checkOffscreen();
  checkOverlap();
  display();
}

function love() {
  push();
  textSize(64);
  fill(255,150,150);
  textAlign(CENTER,CENTER);
  text('LOVE!',width/2,height/2);
  image(imgUser, 150, 375);
  image(imgComp, 350, 375);
  pop();
}

function sadness() {
  push();
  textSize(60);
  fill(150,150,255);
  textAlign(CENTER,CENTER);
  text('HEART-BROKEN',width/2,height/2);
  image(img, 250, 375);
  pop();
}

function secret() {
  push();
  textSize(64);
  fill(150,255,150);
  textAlign(CENTER,CENTER);
  text('ʕ •ᴥ•ʔ <[NO]',width/2,height/2);
  pop();
}

function move() {
  // Move the Circles
    circle1.x = circle1.x + circle1.vx;
    circle1.y = circle1.y + circle1.vy;

    circle2.x = circle2.x + circle2.vx;
    circle2.y = circle2.y + circle2.vy;
}

function checkOffscreen() {
  // Check if the Circles have gone offscreen
  if (circle1.x < 0 || circle1.x > width || circle1.y < 0 || circle1.y > height || circle2.x < 0 || circle2.x > width || circle2.y < 0 || circle2.y > height) {
    state = 'sadness';
  }
}

function checkOverlap() {
  // Check if the Circlesoverlap
  let d = dist(circle1.x,circle1.y,circle2.x,circle2.y);
  if (d < circle1.size/2 + circle2.size/2) {
    state = 'love';
  }
}

function keyTyped() {
  // Check if "NO" is typed to trigger SECRET Ending
  if (key === 'no'); {
    state = 'secret'
  }
}

function display() {
  imageMode(CENTER);
    image(circle1.image, circle1.x, circle1.y);

    imageMode(CENTER);
     image(circle2.image, circle2.x, circle2.y);
}

function mousePressed() {
  if (state === 'title') {
    state = 'simulation';
  }
}

function userMovement() {
  if (keyIsDown(LEFT_ARROW)) {
    circle1.x -= 5;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    circle1.x += 5;
  }
  if (keyIsDown(UP_ARROW)) {
    circle1.y -= 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    circle1.y += 5;
  }
}
