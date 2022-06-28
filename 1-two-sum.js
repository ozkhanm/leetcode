/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hashmap = {};
    
    nums.forEach((it, i) => hashmap[it] = i);
    
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        
        if (hashmap.hasOwnProperty(diff) && hashmap[diff] !== i) {
           return [i, hashmap[diff]];
        }
    }
};