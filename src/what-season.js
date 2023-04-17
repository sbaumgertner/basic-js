const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date){
    return 'Unable to determine the time of year!';
  }
  let month;
  try {
    month = date.getMonth();
    let utcDay = date.getUTCDay();
  }
  catch (e){
    throw new Error('Invalid date!');
  }
  if (!(date instanceof Date) || month == undefined || date == (new Date())){
    throw new Error('Invalid date!');
  }

  if (month < 2 || month == 11){
    return 'winter';
  }
  if (month < 5){
    return 'spring';
  }
  if (month < 8){
    return 'summer';
  }
  return 'autumn';
}

module.exports = {
  getSeason
};
