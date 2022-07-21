/**
 * Solved on - Leetcode, problem no - 890
 *
 * Problem -
 * Given a list of strings words and a string pattern, return a list of words[i] that match pattern.
 * You may return the answer in any order.
 * A word matches the pattern if there exists a permutation of letters p so that after replacing every letter x in the pattern with p(x),
 * we get the desired word.
 * Recall that a permutation of letters is a bijection from letters to letters: every letter maps to another letter, and no two letters map to the same letter.
 */
var findAndReplacePattern = function (words, pattern) {
  const matchedWords = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const charMap = new Map();
    const reverseCharMap = new Map();
    let matched = true;

    for (let j = 0; j < word.length; j++) {
      const mappedChar = charMap.get(pattern[j]);
      if (mappedChar && mappedChar !== word[j]) {
        matched = false;
        break;
      } else if (!charMap.has(pattern[j]) && reverseCharMap.has(word[j])) {
        matched = false;
        break;
      } else {
        charMap.set(pattern[j], word[j]);
        reverseCharMap.set(word[j], pattern[j]);
      }
    }

    if (matched) {
      matchedWords.push(word);
    }
  }
  return matchedWords;
};
