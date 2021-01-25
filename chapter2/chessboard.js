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
  let grid_size = size * size;
  let space_char = " ";
  let hash_char = "#";
  let result_grid = "";
  let temp_char = space_char;
  for (let ctr = 0; ctr < grid_size; ctr++) {
    result_grid += temp_char;
    if ((ctr + 1) % size === 0 && ctr + 1 != grid_size) {
      result_grid += "\n";
    } else {
      temp_char = temp_char == space_char ? hash_char : space_char;
    }
  }
  return result_grid;
}

console.log(makeChessboardGrid(8));
console.log(makeChessboardGrid(50));
