// prettier-ignore
const tetrimino = {
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

  rotateState: (state, type, direction) => {
    // if type is 'O' immediatly return.
    if (type === 'O') return state;

    // Matrix size is 3 for all tetrimino but the 'I" type.
    // Element index are in range [0 - 2] for all the other types
    // and in range [0 - 3] for the 'I' type.
    let len = 2;
    if (type === 'I') len = 3;

    // return new states for left and right rotation and the same state if no direction is specified.
    if (direction === 'left') {
      return state.map((elem) => [len - elem[1], elem[0]]);
    } else if (direction === 'right') {
      return state.map((elem) => [elem[1], len - elem[0]]);
    } else return state;
  },
}

export default { tetrimino };
