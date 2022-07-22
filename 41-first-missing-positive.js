/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], 1);
  }

  for (let i = 1; i <= nums.length; i++) {
    if (!map.has(i)) {
      return i;
    }
  }

  return nums.length + 1;
};
