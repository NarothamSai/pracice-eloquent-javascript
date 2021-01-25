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
    let hash_char = "#";
    let log_hash_str = makeStringOfGivenCharAndLength(hash_char, ctr);
    console.log(log_hash_str);
  }
}

function makeStringOfGivenCharAndLength(char, length) {
  let result_str = "";
  for (let ctr = 0; ctr < length; ctr++) {
    result_str += char;
  }
  return result_str;
}

loopingATriangle(7);
