/**
 * @param {number} n
 * @return {string}
 */
 var countAndSay = function(n) {
    let result = "1";
    
    if (n === 1) {
        return "1";
    }
    
    for (let i = 0; i < n - 1; i++) {
        result = count(result);
    }
    
    return result;
};

/**
 * @param {string} str
 * @return {string}
 */
var count = function(str) {
    let result = "";
    let index = 1;
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[i + 1]) {
            result += index + str[i];
            index = 1;
        } else {
            index++;
        }
    }
    
    return result;
};