/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const words = s.split(" ").filter(it => it !== "");

    return words[words.length - 1].length;
};