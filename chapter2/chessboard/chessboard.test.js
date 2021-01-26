const makeChessboardGrid = require("./chessboard");

test("chessgrid of 8 to equal pattern with space and hash", () => {
  expect(makeChessboardGrid(8)).toBe(
    " # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # "
  );
});
