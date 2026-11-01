const { NotImplementedError } = require("../lib");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const rows = matrix.length;
  const cols = rows ? matrix[0].length : 0;

  const blocked = new Array(cols).fill(false);
  let sum = 0;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (blocked[c]) continue;
      if (matrix[r][c] === 0) {
        blocked[c] = true;
      } else {
        sum += matrix[r][c];
      }
    }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum,
};
