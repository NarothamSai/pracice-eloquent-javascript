const { TestScheduler } = require("jest");
const { range, sum } = require("./sumOfRange");

describe("sum of range:", () => {
  describe("sum", () => {
    test("sum of array of number returns correct sum", () => {
      expect(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(55);
    });
  });
  describe("range", () => {
    test("range of 1 and 10 return array from 1 to 10", () => {
      expect(range(1, 10)).toBe([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
  });
});
