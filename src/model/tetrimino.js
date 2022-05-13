// prettier-ignore
const tetrimino = {
  // Rotation states. 
  // A tetrimino state can be defined as tetrimino[type][rotation] where roation is in range [0 - 3].
  I: [
      [[1, 0], [1, 1], [1, 2], [1, 3]],
      [[0, 2], [1, 2], [2, 2], [3, 2]],
      [[2, 0], [2, 1], [2, 2], [2, 3]],
      [[0, 2], [1, 1], [2, 1], [3, 1]],
    ,
  ],
  O: [
      [[0, 0], [0, 1], [1, 0], [1, 1]],
    ],
  T: [
      [[0, 1], [1, 0], [1, 1], [1, 2]],
      [[0, 1], [1, 1], [1, 2], [2, 1]],
      [[1, 0], [1, 1], [1, 2], [2, 1]],
      [[0, 1], [1, 0], [1, 1], [2, 1]]
  ],
  S: [
      [[0, 1], [0, 2], [1, 0], [1, 1]],
      [[0, 1], [1, 1], [1, 2], [2, 2]],
      [[1, 1], [1, 2], [2, 0], [2, 1]],
      [[0, 0], [1, 0], [1, 1], [2, 1]],
  ],
  Z: [
      [[0, 0], [0, 1], [1, 1], [1, 2]],
      [[0, 2], [1, 1], [1, 2], [2, 1]],
      [[1, 0], [1, 1], [2, 1], [2, 2]],
      [[0, 1], [1, 0], [1, 1], [2, 0]], 
  ],
  J: [
      [[0, 0], [1, 0], [1, 1], [1, 2]],
      [[0, 1], [0, 2], [1, 1], [2, 1]],
      [[1, 0], [1, 1], [1, 2], [2, 2]],
      [[0, 1], [1, 1], [2, 0], [2, 1]],
  ],
  L: [
      [[0, 2], [1, 0], [1, 1], [1, 2]],
      [[0, 1], [1, 1], [2, 1], [2, 2]],
      [[1, 0], [1, 1], [1, 2], [2, 0]],
      [[0, 0], [0, 1], [1, 1], [2, 1]],
  ],

  types: ['I', 'O', 'T', 'S', 'Z', 'J', 'L'],

  /**
   * When the player attempts to rotate a tetromino, 
   * but the position it would normally occupy after basic rotation is obstructed
   * we will attempt to "kick" the tetromino into an alternative position nearby using these [x, y] coordinates
  */
  wallkicks: {
    // O tetrimino has no wallkicks.
    // wallkicks for J, L, T, S, Z  tetrimino.
    // w1 is for 0->1 and 2->1 rotations.
    w1: [[-1, 0], [-1, 1], [0, -2], [-1, -2]],
    // w2 is for 1->0 and 1->2 rotations.
    w2: [[1, 0], [1, -1], [0, 2], [1, 2]],
    // w3 is for 2->3 and 0->3 rotations.
    w3: [[1, 0], [1, 1], [0, -2], [1, -2]],
    // w4 is for 3->2 and 3->0 rotations.
    w4: [[-1, 0], [-1, -1], [0, 2], [-1, 2]]

    // wallkicks for I tetrimino.

  }
}

export default { tetrimino };
