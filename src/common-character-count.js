const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  if (s1.length == 0 || s2.length == 0){
    return 0;
  }
  if (s1.length == 1){
    if (s2.indexOf(s1) >= 0){
      return 1;
    }
    else return 0;
  }
  let cur = s1[0];
  s1 = s1.substring(1);

  let i = s2.indexOf(cur);
  if (i == -1){
    return getCommonCharacterCount(s1, s2);
  }

  let newS2 = s2.substring(0, i);
  if (i != s2.length - 1){
    newS2 += s2.substring(i + 1, s2.length);
  }
  s2 = newS2;
  return 1 + getCommonCharacterCount(s1, s2)
}

module.exports = {
  getCommonCharacterCount
};
