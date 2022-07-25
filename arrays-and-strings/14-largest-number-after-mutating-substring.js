/**
 * Solved on - Leetcode, problem no - 1946
 *
 * Problem -
 * You are given a string num, which represents a large integer.
 * You are also given a 0-indexed integer array change of length 10 that maps each digit 0-9 to another digit.
 * More formally, digit d maps to digit change[d].
 * You may choose to mutate a single substring of num.
 * To mutate a substring, replace each digit num[i] with the digit it maps to in change
 * (i.e. replace num[i] with change[num[i]]).
 * Return a string representing the largest possible integer after mutating (or choosing not to) a
 * single substring of num.
 * A substring is a contiguous sequence of characters within the string.
 */
var maximumNumber = function (num, change) {
  let updated = false;
  let updatedString = num.split("");
  for (let i = 0; i < num.length; i++) {
    const numInt = +updatedString[i];
    if (numInt < change[numInt]) {
      updatedString[i] = change[numInt];
      updated = true;
    } else if (numInt > change[numInt] && updated) {
      break;
    }
  }
  return updatedString.join("");
};
