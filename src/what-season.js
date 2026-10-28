const { NotImplementedError } = require('../lib');

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
  if (date === undefined) {
    return "Unable to determine the time of year!";
  }
  try {
    Date.prototype.getTime.call(date);
  } catch {
    throw new Error("Invalid date!");
  }
  const M = Date.prototype.getMonth.call(date);

  if (M === 0 || M === 1 || M === 11) {
    return "winter";
  } else if (M === 2 || M === 3 || M === 4) {
    return "spring";
  } else if (M === 5 || M === 6 || M === 7) {
    return "summer";
  } else M === 8 || M === 9 || M === 10;
  return "autumn";
}

module.exports = {
  getSeason
};
