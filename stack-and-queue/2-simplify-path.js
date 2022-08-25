/**
 * Solved on - Leetcode
 * Leetcode problem no - 71
 *
 */

var simplifyPath = function (path) {
  const stack = [];
  const dirNames = path.split("/");
  dirNames.forEach((dir) => {
    if (dir === "..") {
      if (stack.length > 0) {
        stack.pop();
      }
    } else if (dir !== "" && dir !== ".") {
      stack.push(dir);
    }
  });
  return "/" + stack.join("/");
};
