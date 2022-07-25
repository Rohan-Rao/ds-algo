/**
 * Solved on - Leetcode, problem no - 49
 *
 * Problem -
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 *
 *  */
var groupAnagrams = function (strs) {
  const primes = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97, 101,
  ];
  const asciiSumMap = new Map();

  for (let i = 0; i < strs.length; i++) {
    const word = strs[i];
    let sum = 1;
    for (let j = 0; j < word.length; j++) {
      sum *= primes[word.charCodeAt(j) - 97];
    }

    const anagramWords = asciiSumMap.get(sum);
    // console.log(sum);
    if (anagramWords) {
      anagramWords.push(word);
    } else {
      asciiSumMap.set(sum, [word]);
    }
  }

  const anagramWordGroups = [];
  for (const anagramWords of asciiSumMap.values()) {
    anagramWordGroups.push(anagramWords);
  }
  return anagramWordGroups;
};
