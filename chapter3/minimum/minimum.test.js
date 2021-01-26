const minNum = require("./minimum");

test("Mininum number of 15,50,5 to be 5", () => {
  expect(minNum(15, 20, 5)).toBe(5);
});
