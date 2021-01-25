const loopingATriangle = require("./loopingATriangle");
/**
 * Write a loop that makes seven calls to
 * console.log to output the following triangle:
 *
 * #
 * ##
 * ###
 * ####
 * #####
 * ######
 * #######
 *
 * @param {string} length
 */
test("loopingATriangle to equal Triangle pattern", () => {
  expect(loopingATriangle(7)).toBe("#\n##\n###\n####\n#####\n######\n#######");
});
