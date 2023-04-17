const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)){
    return false;
  }
  let initials = members.reduce((arr, cur) => {
    if ((typeof cur) != 'string'){
      return arr;
    }
    arr.push(cur.trim()[0].toUpperCase());
    return arr;
  }, []);
  return initials.sort().join('');
}

module.exports = {
  createDreamTeam
};
