/**
 *
 * You can get the Nth character, or letter, from a
 * string by writing "string"[N]. The returned value
 * will be a string containing only one character
 * (for example, "b"). The first character has
 * position 0, which causes the last one to be found
 * at position string.length - 1. In other words, a
 * two-character string has length 2, and its
 * characters have positions 0 and 1.
 *
 *  Write a function countBs that takes a string as
 * its only argument and returns a number that
 * indicates how many uppercase “B” characters there
 * are in the string.
 *
 * Next, write a function called countChar that
 * behaves like countBs, except it takes a second
 * argument that indicates the character that is to
 * be counted (rather than counting only uppercase
 * “B” characters). Rewrite countBs to make use of
 * this new function.
 *
 * @param {string} str
 * @param {string} char
 */
function countChar(str, char) {
  let charCount = 0;
  for (let ctr = 0; ctr < str.length; ctr++) {
    if (str[ctr] === char) charCount++;
  }
  return charCount;
}

const passCheckbox = "\u2705";
const failCheckbox = "\u274e";
// Tests
console.log(
  "countChar for Bean Counting of B must be 1",
  countChar("Bean Counting", "B") === 1
    ? passCheckbox + " Passed"
    : failCheckbox + " Failed"
);
console.log(
  "countChar for face-lift of f must be 2",
  countChar("face-lift", "f") === 2
    ? passCheckbox + " Passed"
    : failCheckbox + " Failed"
);
console.log(
  "countChar for Take a bath of a. must be 3",
  countChar("Take a bath.", "a") === 3
    ? passCheckbox + " Passed"
    : failCheckbox + " Failed"
);
