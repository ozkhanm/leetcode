/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  for (let i = 0; i < board.length; i++) {
    const rowSet = new Set();
    const colSet = new Set();
    const boxSet = new Set();

    for (let j = 0; j < board[i].length; j++) {
      const rowElem = board[i][j];
      const colElem = board[j][i];
      const boxElem = board[3 * Math.floor(i / 3) + Math.floor(j / 3)][((i * 3) % 9) + (j % 3)];


      if (rowElem !== ".") {
        if (rowSet.has(rowElem)) {
          return false;
        } else {
          rowSet.add(rowElem);
        }
      }

      if (colElem !== ".") {
        if (colSet.has(colElem)) {
          return false;
        } else {
          colSet.add(colElem);
        }
      }

      if (boxElem !== ".") {
        if (boxSet.has(boxElem)) {
          return false;
        } else {
          boxSet.add(boxElem);
        }
      }
    }
    console.log(boxSet)
  }

  return true;
};
