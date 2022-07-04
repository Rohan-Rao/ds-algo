/**
 * Solved from - CTCI book
 *
 * Problem - Write a method to replace all spaces in a string with '%20'
 *
 * The following problem is solved by considering Java character array even tough the program is written in JS.
 * This solution does not work in JS since string is immutable in JS that means we cannot modify the string in place.
 * In JS this can be done simply by iterating over an array and concatenating '%20' if current letter at index is ' '.
 * Following is the pseudo code for JS
 *
 *  outputStr = '';
 *  if (str[i] === " ") {
 *     outputStr += '%20';
 *  } else {
 *      outputStr += str[i];
 *  }
 */

function urlify(str, trueLength) {
  let spaceCount = 0;
  let shiftedIndex = 0;
  for (let i = 0; i < trueLength; i++) {
    if (str[i] === " ") {
      spaceCount += 1;
    }
  }
  shiftedIndex = trueLength + 3 * spaceCount - 1;
  for (let i = trueLength - 1; i >= 0; i--) {
    if (str[i] === " ") {
      str[shiftedIndex] = "0";
      str[shiftedIndex - 1] = "2";
      str[shiftedIndex - 2] = "%";
      shiftedIndex -= 3;
    } else {
      str[shiftedIndex] = str[i];
      shiftedIndex -= 1;
    }
  }
  return str;
}
const inputStr = "Mr John Smith      ";
console.log("Input: ", inputStr);
const output = urlify(inputStr, 13);
console.log("Output: ", output);
