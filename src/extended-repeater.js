const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = String(str);
  addition = (options.addition !== undefined) ? String(options.addition) : '';
  separator = (options.separator !== undefined) ? String(options.separator) : '+';
  additionSeparator = (options.additionSeparator !== undefined) ? String(options.additionSeparator) : '|';
  repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
  additionRepeatTimes  = options.additionRepeatTimes  ? options.additionRepeatTimes  : 1;
  
  let additionStr = addition;
  if (additionStr && additionRepeatTimes > 1){
    additionStr += (additionSeparator + addition).repeat(additionRepeatTimes - 1);
  }

  let fullStr = str + additionStr;
  let result = fullStr;
  if (repeatTimes > 1){
    result += (separator + fullStr).repeat(repeatTimes - 1);
  }
  return result;
}

module.exports = {
  repeater
};
