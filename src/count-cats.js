const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(backyard) {
  let count = 0;
    backyard.forEach(element => {
        count += element.reduce((cnt, current) => cnt + ((current === '^^') ? 1 : 0), 0 );
  });
  return count;
}

module.exports = {
  countCats
};
