const countChar = require("./bean_counting");

test("", () => {
  expect(countChar("Bean Counting", "B")).toBe(1);
});
test("", () => {
  expect(countChar("face-lift", "f")).toBe(2);
});
test("", () => {
  expect(countChar("Take a bath.", "a")).toBe(3);
});
