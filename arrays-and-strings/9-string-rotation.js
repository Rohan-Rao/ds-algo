/**
 * Solved on - Leetcode, problem no - 796
 *
 * Problem - Given two strings s1 and s2, write code to check if s2 is a rotation of s1
 * for example: terbottlewa is a rotation of waterbottle
 *
 * I have solved in a bit complicated way. An easier solution would be to concatenate s2 and check if it
 * is a substring of s1.
 * For example - terbottleWATERBOTTLEwa
 */

var rotateString = function (str, goal) {
  if (str.length !== goal.length) {
    return false;
  }

  let i = 0;
  let j = 0;
  let count = 0;
  let pass = false;

  while (i < str.length && j < goal.length) {
    if (str[i] === goal[j]) {
      i += 1;
      j += 1;
      count += 1;
    } else {
      i += 1;
      if (pass) {
        return false;
      }
    }

    if (i === str.length) {
      i = 0;
      pass = true;
    }

    if (count === goal.length) {
      return true;
    }
  }

  return false;
};
