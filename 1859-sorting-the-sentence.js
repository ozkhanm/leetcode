/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    const words = s.split(" ");
    const map = {};
    const result = [];
    
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const index = word[word.length - 1];
        
        map[index] = word.slice(0, word.length - 1);
    }
    
    for (let i = 1; i <= Object.keys(map).length; i++) {
        result.push(map[i]);
    }
    
    return result.join(" ");
};