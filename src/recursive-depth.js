const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)){
      return 0;
    }
    if (arr.length == 0) {
      return 1;
    }
    let max = 0;
    arr.forEach(element => {
      let depth = this.calculateDepth(element);
      if (depth > max){
        max = depth;
      }
    });
    return 1 + max;
  }
}

module.exports = {
  DepthCalculator
};
