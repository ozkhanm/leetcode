/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const hashMap = {};
    let i = 0;
    let ans = 0;
    
    for (let j = 0; j < s.length; j++) {
        if (hashMap.hasOwnProperty(s[j])) {
            i = Math.max(hashMap[s[j]], i);
        }
        
        ans = Math.max(ans, j - i + 1);
        hashMap[s[j]] = j + 1;
    }
    
    return ans;
};