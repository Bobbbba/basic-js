const { NotImplementedError } = require("../lib");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const cols = rows ? matrix[0].length : 0;

  // Смещения по 8 направлениям
  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  const result = [];

  for (let r = 0; r < rows; r++) {
    const newRow = [];

    for (let c = 0; c < cols; c++) {
      let count = 0;

      for (const [dr, dc] of directions) {
        const nr = r + dr;
        const nc = c + dc;

        const inside = nr >= 0 && nr < rows && nc >= 0 && nc < cols;

        if (inside && matrix[nr][nc]) {
          count++;
        }
      }

      newRow.push(count);
    }

    result.push(newRow);
  }

  return result;
}

module.exports = {
  minesweeper,
};
