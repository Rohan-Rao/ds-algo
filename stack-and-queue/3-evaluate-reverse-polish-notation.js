/**
 *  Solved on 0- Leetcode
 *  Leetcode problem no - 150
 */
var evalRPN = function (tokens) {
  const stack = [];
  tokens.forEach((token) => {
    if (token === "+" || token === "-" || token === "*" || token === "/") {
      const n2 = stack.pop();
      const n1 = stack.pop();
      const result = doOpr(token, n1, n2);
      stack.push(result);
    } else {
      const num = parseInt(token, 10);
      stack.push(num);
    }
  });

  return stack.length === 1 ? stack.pop() : null;
};

var doOpr = (opr, n1, n2) => {
  switch (opr) {
    case "+":
      return n1 + n2;
    case "-":
      return n1 - n2;
    case "*":
      return n1 * n2;
    case "/":
      return parseInt(n1 / n2, 10);
    default:
      throw new Error("Incorrect operation");
  }
};
