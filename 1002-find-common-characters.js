/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    let letters = [...words[0]];

    for (let i = 1; i < words.length; i++) {
        letters = letters.filter((it) => {
            const oldWordLength = words[i].length;

            words[i] = words[i].replace(it, "");

            return oldWordLength > words[i].length;
        });
    }

    return letters;
};