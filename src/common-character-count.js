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
  let n1 = s1.length;
  let n2 = s2.length;
  let freq1 = new Array(26);
  let freq2 = new Array(26);
  freq1.fill(0);
  freq2.fill(0);
  let i,
    count = 0;
  for (i = 0; i < n1; i += 1) freq1[s1[i].charCodeAt() - "a".charCodeAt()] += 1;
  for (i = 0; i < n2; i += 1) freq2[s2[i].charCodeAt() - "a".charCodeAt()] += 1;
  for (i = 0; i < 26; i += 1) count += Math.min(freq1[i], freq2[i]);
  return count;
}

module.exports = {
  getCommonCharacterCount
};
