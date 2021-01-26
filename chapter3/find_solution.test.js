const { TestScheduler } = require("jest");
const findSolution = require("./find_solution");

test("findSolution for 13 to be  required solution", () => {
  expect(findSolution(13)).toBe("(((1 * 3) + 5) + 5)");
});
test("findSolution for 24 to be required solution", () => {
  expect(findSolution(24)).toBe("(((1 * 3) + 5) * 3)");
});
