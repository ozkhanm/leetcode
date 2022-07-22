/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let result = "";

    for (let i = 0; i < indices.length; i++) {
        result += s[indices.indexOf(i)];
    }

    return result;
};
