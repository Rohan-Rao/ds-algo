/**
 * Solved On - Leetcode
 * Leetcode problem no - 387
 *
 * Problem - Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
 */

const firstUniqChar = function (s) {
  const arr = new Array(26);

  for (let i = 0; i < s.length; i++) {
    const asciiCharCode = s.charCodeAt(i);
    const arrIndex = asciiCharCode % 97;
    // console.log(arrIndex);

    if (arr[arrIndex] != null) {
      arr[arrIndex] = arr[arrIndex] + 1;
    } else {
      arr[arrIndex] = 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    const asciiCharCode = s.charCodeAt(i);
    const arrIndex = asciiCharCode % 97;

    if (arr[arrIndex] === 1) {
      return i;
    }
  }

  return -1;
};
