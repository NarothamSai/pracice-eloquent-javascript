const isEven = require("./recursion");
test("isEven for 50 to be true", () => {
  expect(isEven(50)).toBe(true);
});
test("isEven for 75 to be false", () => {
  expect(isEven(75)).toBe(false);
});
