const loopingATriangle = require("./loopingATriangle");

test("loopingATriangle to equal Triangle pattern", () => {
  expect(loopingATriangle(7)).toBe("#\n##\n###\n####\n#####\n######\n#######");
});
