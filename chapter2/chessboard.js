/**
 *
 * Write a program that creates a string that
 * represents an 8x8 grid there is either a space or
 * a "#" character. The characters should form a
 * chessboard.
 *
 * Passing this string to console.log should show
 * something like this:
 *
 *  # # # #
 * # # # #
 *  # # # #
 * # # # #
 *  # # # #
 * # # # #
 *  # # # #
 * # # # #
 *
 * @param {number} size
 */
function makeChessboardGrid(size) {
  const gridSize = size * size;
  const spaceChar = " ";
  const hashChar = "#";
  let resultGrid = "";
  let tempChar = spaceChar;
  for (let ctr = 0; ctr < gridSize; ctr++) {
    resultGrid += tempChar;
    if ((ctr + 1) % size === 0 && ctr + 1 !== gridSize) {
      resultGrid += "\n";
    } else {
      tempChar = tempChar === spaceChar ? hashChar : spaceChar;
    }
  }
  return resultGrid;
}

console.log(makeChessboardGrid(8));
console.log(makeChessboardGrid(50));
