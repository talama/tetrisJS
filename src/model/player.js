class Player {
  constructor(rows, cols) {
    this.grid = Array(rows)
      .fill('')
      .map(() => Array(cols).fill('E'));
    this.piece = {
      type: null,
      pos: {
        x: 0,
        y: 0,
      },
      rotation: 0,
    };
  }
}
