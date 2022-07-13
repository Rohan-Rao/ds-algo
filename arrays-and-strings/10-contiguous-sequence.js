/**
 * Solve on - Leetcode
 *
 * Problem - You are given an array of integers(both positive and negative). Find the contiguous sequence
 * with the largest sum. Return the sum.
 *
 * Tip - Kadane's algorithm
 */

var maxSubArray = function (nums) {
  let max = Number.MIN_SAFE_INTEGER;
  let currSum = 0;

  for (let i = 0; i < nums.length; i++) {
    currSum += nums[i];
    if (currSum > max) {
      max = currSum;
    }
    if (currSum < 0) {
      currSum = 0;
    }
  }
  return max;
};
