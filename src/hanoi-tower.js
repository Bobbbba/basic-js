const { NotImplementedError } = require("../lib");

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  const turnsBig = 2n ** BigInt(disksNumber) - 1n;
  const speedBig = BigInt(turnsSpeed);

  const numerator = turnsBig * 3600n;

  const secondsBig = (numerator) / speedBig;
  return {
    turns: Number(turnsBig),
    seconds: Number(secondsBig),
  };
}

module.exports = {
  calculateHanoi,
};
