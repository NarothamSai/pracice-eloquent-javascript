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

function loopingATriangleWithLog(length) {
  let logHashStr = "";
  const hashChar = "#";
  for (let ctr = 1; ctr <= length; ctr++) {
    logHashStr = logHashStr + hashChar;
    console.log(logHashStr);
  }
}

function loopingATriangle(length) {
  let triangleStr = "";
  let logHashStr = "";
  const hashChar = "#";
  for (let ctr = 1; ctr <= length; ctr++) {
    logHashStr = logHashStr + hashChar;
    triangleStr += logHashStr + (ctr !== length ? "\n" : "");
  }
  return triangleStr;
}

loopingATriangleWithLog(7);

module.exports = loopingATriangle;
