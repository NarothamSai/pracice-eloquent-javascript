/**
 *
 * Consider this puzzle: by starting from the number
 * 1 and repeatedly either adding 5 or multiplying
 * by 3, an infinite set of numbers can be produced.
 * How would you write a function thet, given a
 * number, tries to find a sequence of such
 * additions and multiplications that produce that
 * number?
 *
 * For example, the number 13 could be reached by
 * first multiplying by 3 and then adding 5 twice,
 * whereas the number 15 cannot be reached at all.
 *
 * @param {number} target
 * @returns {string} solution
 */
function findSolution(target) {
  function find(result, solution) {
    // console.log("result:", result);
    // console.log("solution:", solution);
    if (result === target) {
      return solution;
    } else if (result > target) {
      return null;
    } else {
      return (
        find(result + 5, `(${solution} + 5)`) ||
        find(result * 3, `(${solution} * 3)`)
      );
    }
  }
  return find(1, "1");
}
// console.log(findSolution(24));
module.exports = findSolution;
