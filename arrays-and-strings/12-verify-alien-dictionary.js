/**
 * Solved on - Leetcode, problem no - 953
 *
 * Problem -
 * In an alien language, surprisingly, they also use English lowercase letters, but possibly in a different order.
 * The order of the alphabet is some permutation of lowercase letters.
 * Given a sequence of words written in the alien language, and the order of the alphabet,
 * return true if and only if the given words are sorted lexicographically in this alien language.
 */
var isAlienSorted = function (words, order) {
  const checkWords = (w1, w2) => {
    const shortWord = w1.length > w2.length ? w2 : w1;
    // console.log(w1, " ", w2)
    for (let i = 0; i < shortWord.length; i++) {
      const w1Weight = orderMap.get(w1[i]);
      const w2Weight = orderMap.get(w2[i]);
      // console.log(w1Weight, " ", w2Weight)

      if (w1Weight > w2Weight) {
        return false;
      } else if (w1Weight < w2Weight) {
        return true;
      }
    }
    return shortWord === w1;
  };

  const orderMap = new Map();

  for (let i = 0; i < order.length; i++) {
    orderMap.set(order[i], i);
  }

  for (let i = 0; i < words.length - 1; i++) {
    const w1 = words[i];
    const w2 = words[i + 1];

    const w1Weight = orderMap.get(w1[0]);
    const w2Weight = orderMap.get(w2[0]);

    if (w1Weight > w2Weight) {
      return false;
    } else if (w1Weight === w2Weight) {
      if (checkWords(w1, w2) === false) {
        return false;
      }
    }
  }

  return true;
};
