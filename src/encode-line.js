const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {

  if (str == ''){
    return '';
  }

  let char = str[0];
  let cnt = 0;
  let result = '';

  for (let cur of str){
    if (cur === char){
      cnt++;
    }
    else{
      result += ((cnt > 1) ? cnt : '') + char;
      char = cur;
      cnt = 1;
    }
  }
  result += ((cnt > 1) ? cnt : '') + char;
  return result;
}

module.exports = {
  encodeLine
};
