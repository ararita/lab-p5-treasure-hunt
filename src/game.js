class Game {
  drawGame() {
    player.drawPlayer();
  }

  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
    for (let x = 0; x <= width; x += width / 10) {
      for (let y = 0; y <= height; y += height / 10) {
        stroke(0);
        strokeWeight(1);
        line(x, 0, x, height);
        line(0, y, width, y);
      }
    }
  }
}

class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.image;
  }

  drawPlayer() {
    image(
      this.image,
      this.col,
      this.row,
      // this.col * SQUARE_SIDE,
      // this.row * SQUARE_SIDE,
      SQUARE_SIDE,
      SQUARE_SIDE
    );
  }

  preLoadPlayer() {
    this.image = loadImage("../assets/character-down.png");
  }

  moveUp() {
    if (this.row > 0) {
      this.row -= 1;
      this.image = loadImage("../assets/character-up.png");

      console.log("player moves up", this.row);
    }
  }
  moveDown() {
    if (this.row < HEIGHT - SQUARE_SIDE) {
      this.row += SQUARE_SIDE;
      this.image = loadImage("../assets/character-down.png");
      console.log("player moves down", this.row);
    }
  }
  moveLeft() {
    if (this.col > 0) {
      this.col -= SQUARE_SIDE;
      this.image = loadImage("../assets/character-left.png");

      console.log("player moves left", this.col);
    }
  }

  moveRight() {
    if (this.col < WIDTH - SQUARE_SIDE) {
      this.col += SQUARE_SIDE;
      this.image = loadImage("../assets/character-right.png");
      console.log("player moves right", this.row);
    }
  }
}

// const player = new Player(0, 0);

// player.moveUp();
// player.moveDown();
// player.moveDown();

// // player.moveLeft();
// player.moveRight();
// player.drawPlayer();
console.log(player.col, player.row); // => 1,2
