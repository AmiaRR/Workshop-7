let walkers = [];

function setup() {
  createCanvas(400, 400);
  background(0);
  for (let i = 0; i < 40; i++) {
    let x = random(width * 0.1, width * 0.9);
    let y = random(height * 0.1, height * 0.9);
    let r = random(200, 255);
    let g = random(0, 255);
    let b = random(0, 255);
    walkers[i] = new Walker(x, y, r, g, b);
  }
}

function draw() {
  for (let x = 0; x < walkers.length; x++) {
    walkers[x].step();
    walkers[x].show();
  }
}

class Walker {
  constructor(x, y, r, g, b) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.g = g;
    this.b = b;
    this.alpha = 150;
  }

  step() {
    this.x += random(-2, 2);
    this.y += random(-2, 2);


    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  }

  show() {
    noStroke();
    stroke(this.r, this.g, this.b, this.alpha);
    point(this.x, this.y, 8, 8);
  }
}
