const game = new Game();
const player = new Player(0, 0);

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function preload() {
  player.preLoadPlayer();
}

function draw() {
  game.drawGrid();
  player.drawPlayer();
  // game.drawGame();
}

// function keyPressed() {
//   // console.log(keyCode);
//   if (keyCode === 38) {
//     player.moveUp();
//   }
// }
