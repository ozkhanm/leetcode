/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = {};

    for (let i = 0; i < strs.length; i++) {
        const sortedStr = strs[i].split("").sort().join("");

        if (map.hasOwnProperty(sortedStr)) {
            map[sortedStr].push(strs[i]);
        } else {
            map[sortedStr] = [strs[i]];
        }
    }

    return Object.values(map);
};
