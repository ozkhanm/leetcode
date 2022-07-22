/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  const map = {};

  if (new Set(s).size !== new Set(t).size) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      map[s[i]] = t[i];
    }
  }

  let newStr = "";

  for (let i = 0; i < s.length; i++) {
    newStr += map[s[i]];
  }

  return newStr === t;
};
