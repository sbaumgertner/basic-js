const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let dnss = new Set();
  for (let domain of domains){
    let curDomain = domain;
    dnss.add(curDomain);
    while (curDomain.includes('.')){
      let point = curDomain.indexOf('.');
      curDomain = curDomain.substring(point + 1);
      dnss.add(curDomain);
    }
  }

  let result = {};
  for (let dns of dnss){
    let cnt = 0;
    for (let domain of domains){
      if (domain.endsWith(dns)){
        cnt++;
      }
    }
    
    let key = '.' + dns.split('.').reverse().join('.').trim('.');
    result[key] = cnt;
  }
  return result;
}

module.exports = {
  getDNSStats
};
