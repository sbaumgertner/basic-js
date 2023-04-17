const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)){
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let rules = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
  let result = Array.from(arr);
  for (let i = 0; i < result.length - 1; i++){
    if (result[i] == '--discard-next'){
      if (i < result.length - 1 && !rules.includes(result[i + 1])){
        result.splice(i + 1, 1);
      }
    }
    else if (result[i] == '--discard-prev'){
      if (i > 0 && !rules.includes(result[i - 1])){
        result.splice(i - 1, 1);
        i--;
      }
    }
    else if (result[i] == '--double-next'){
      if (i < result.length - 1 && !rules.includes(result[i + 1])){
        result.splice(i + 1, 0, result[i + 1]);
      }
    }
    else if (result[i] == '--double-prev'){
      if (i > 0 && !rules.includes(result[i - 1])){
        result.splice(i - 1, 0, result[i - 1]);
        i++;
      }
    }
  }
  return result.filter(item => !rules.includes(item));
}

module.exports = {
  transform
};
