const { NotImplementedError } = require("../lib");

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
  constructor(direct = true) {
    this.direct = direct;
  }
  _transform(message, key, sign) {
    if (message === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }
    const msg = String(message).toUpperCase();
    const k = String(key).toUpperCase();

    let keyIndex = 0;
    let result = "";

    for (let i = 0; i < msg.length; i += 1) {
      const ch = msg[i];
      const code = ch.charCodeAt(0);

      if (code >= 65 && code <= 90) {
        const shift = k.charCodeAt(keyIndex % k.length) - 65;
        const newCode = ((((code - 65 + sign * shift) % 26) + 26) % 26) + 65;
        result += String.fromCharCode(newCode);
        keyIndex += 1;
      } else {
        result += ch;
      }
    }
    return this.direct ? result : result.split("").reverse().join("");
  }

  encrypt(message, key) {
    return this._transform(message, key, +1);
  }

  decrypt(message, key) {
    return this._transform(message, key, -1);
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
