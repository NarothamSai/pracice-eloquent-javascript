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

function loopingATriangle(length) {
  for (let ctr = 1; ctr <= length; ctr++) {
    const hashChar = "#";
    const logHashStr = makeStringOfGivenCharAndLength(hashChar, ctr);
    console.log(logHashStr);
  }
}

function makeStringOfGivenCharAndLength(char, length) {
  let resultStr = "";
  for (let ctr = 0; ctr < length; ctr++) {
    resultStr += char;
  }
  return resultStr;
}

loopingATriangle(7);
