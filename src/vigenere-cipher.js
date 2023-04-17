const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  isDirect;
  square;

  constructor(isDirect){
    if (isDirect == true || isDirect == undefined){
      this.isDirect = true;
    }
    else{
      this.isDirect = false;
    }
    this.square = {};
    let alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let curStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let x of alph){
      this.square[x] = {};
      for (let i = 0; i < alph.length; i++){
        this.square[x][alph[i]] = curStr[i]; 
      }
      curStr = curStr.substring(1) + curStr[0];
    }
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined){
      throw new Error('Incorrect arguments!');
    }
    message = message.toUpperCase();
    key = key.toUpperCase();

    let ki = 0;
    let result = '';
    for (let i = 0; i < message.length; i++){
      if (this.square[message[i]] !== undefined){
        result += this.square[message[i]][key[ki]];
        ki++;
        if (ki == key.length){
          ki = 0;
        }
      }
      else{
          result += message[i];
      } 
    }
    return (this.isDirect) ? result : result.split('').reverse().join('');
  }

  decrypt(message, key) {
    if (message === undefined || key === undefined){
      throw new Error('Incorrect arguments!');
    }
    message = message.toUpperCase();
    key = key.toUpperCase();

    let ki = 0;
    let result = '';
    for (let i = 0; i < message.length; i++){
      if (this.square[message[i]] === undefined){
        result += message[i];
      }
      else{
        let curStr = this.square[key[ki]];
        let keys = Object.keys(curStr);
        let values = Object.values(curStr);
        result += keys[values.indexOf(message[i])];
        ki++;
        if (ki == key.length){
          ki = 0;
        }
      }
    }
    return (this.isDirect) ? result : result.split('').reverse().join('');
  }

  getKeyStr(message, key) {
    let repeat = Math.floor(message.length / key.length);
    let add = (message.length > key.length) ? message.length % key.length : message.length;

    let keyStr = '';
    if (repeat > 0){
      keyStr += key.repeat(repeat);
    }
    keyStr += key.substring(0, add);
    return keyStr;
  }
}

module.exports = {
  VigenereCipheringMachine
};
