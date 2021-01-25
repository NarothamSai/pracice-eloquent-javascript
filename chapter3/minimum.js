/**
 *
 * Write a function min that takes two arguments and
 * return their minimum.
 *
 * @param {number} num1
 * @param {number} num2
 */
function minimumNum(num1, num2) {
  if (num1 < num2) {
    return num1;
  } else return num2;
}
/**
 *
 * @param  {...number} arg
 */
function minimumNumAllArg(...arg) {
  let min_num = Number.MAX_SAFE_INTEGER;
  arg.forEach((elem) => {
    if (elem < min_num) {
      min_num = elem;
    }
  });
  return min_num;
}

console.log(minimumNum(15, 20));
console.log(minimumNumAllArg(15, 20, 5));
