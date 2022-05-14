import Player from './player.js';

class Model {
  constructor() {
    this.ROW = 20;
    this.COL = 10;
    this.player1 = new Player(this.COL, this.ROW);
  }
}
