function isPalindromPermutation(inputStr) {
  const map = new Map();
  let trueStrLength = 0;
  for (let i = 0; i < inputStr.length; i++) {
    if (inputStr !== " ") {
      trueStrLength += 1;
      if (map.has(inputStr[i])) {
        map.delete(inputStr[i]);
      } else {
        map.set(inputStr[i], 1);
      }
    }
  }
  // console.log(map);
  const isEven = trueStrLength % 2 === 0;
  // console.log(trueStrLength);
  // console.log(inputStr.length);
  // console.log(isEven);
  let oneCount = 0;

  for (const [char, count] of map) {
    // console.log("count: ",count);
    if ((isEven && count !== 0) || count > 1) {
      return false;
    }
    if (count === 1) {
      oneCount += 1;
    }
  }
  return isEven || oneCount === 1;
}
