/**
 * Solved on - GeeksForGeeks, name - Anagram
 *
 * Problem name - Given two strings, write a method to decide if one is a permutation of the other
 */

const getAsciiCode = (str, index) => {
  return str.charCodeAt(index);
};

const isAnagram = (a, b) => {
  if (a.length !== b.length) {
    return false;
  }

  const lowerCaseCharCount = new Array(26);

  for (let i = 0; i < a.length; i++) {
    const index = this.getAsciiCode(a, i) - 97;
    if (lowerCaseCharCount[index] != null) {
      lowerCaseCharCount[index] = lowerCaseCharCount[index] + 1;
    } else {
      lowerCaseCharCount[index] = 1;
    }
  }

  for (let i = 0; i < b.length; i++) {
    const index = this.getAsciiCode(b, i) - 97;
    if (lowerCaseCharCount[index] != null) {
      lowerCaseCharCount[index] = lowerCaseCharCount[index] - 1;
    } else {
      lowerCaseCharCount[index] = -1;
    }
  }

  for (let i = 0; i < lowerCaseCharCount.length; i++) {
    if (lowerCaseCharCount[i] != null && lowerCaseCharCount[i] !== 0) {
      return false;
    }
  }
  return true;
};
