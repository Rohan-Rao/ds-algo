/**
 * Solved on - Leetcode
 *
 * Leetcode problem no - 1441
 *
 */

var buildArray = function (target, n) {
  let targetItr = 0;
  const oprs = [];
  for (let i = 1; i <= n; i++) {
    if (targetItr === target.length) {
      break;
    }
    if (target[targetItr] !== i) {
      oprs.push("Push");
      oprs.push("Pop");
    } else {
      oprs.push("Push");
      targetItr += 1;
    }
  }

  return oprs;
};
