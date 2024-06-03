let canvas = {
  w:500,
  h:500
}

/**
*
*   INSTANCES
*
**/
let particleManager; //manager for all particles in scene
let fpsDisplayer;    //showing fps on the screen


const particleCount = 555 ; //particle count 
const particleDistance = 100; //distance between two particle for drawing line  
const cellCount = 4; // we have a square canvas so we can use w and h same value -> this means canvas.w / cellCount = canvas.h/ cellCount 


let grid;
let particles = [];

function setup() {
  createCanvas(canvas.w, canvas.h);
  colorMode(HSL)
  fpsDisplayer = new FPS(50,50)
  grid = new Grid(canvas.w / cellCount , canvas.w , canvas.h)
  
  for (let i = 0; i < particleCount; i++) {
    particles.push(
      new Particle(grid)
    )
  }
}
function draw() {
    background(0);
    grid.draw();
    particles.forEach(particle => {
      particle.update();
  });
    fpsDisplayer.show();
}