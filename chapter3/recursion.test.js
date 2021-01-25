const isEven = require("./recursion");
test("", () => {
  expect(isEven(50)).toBe(true);
});
test("", () => {
  expect(isEven(75)).toBe(false);
});
