/**
 * Returns true if the given number is negative (less than 0) and false otherwise.
 *
 * @param {number} num The input number
 * @returns {boolean} True if num is negative and false otherwise
 */
function isNegative(num) {
  return num < 0;
}

if (require.main === module) {
  console.log('Running sanity checks for isNegative:');

  console.log(isNegative(0) === false);
  console.log(isNegative(1) === false);
  console.log(isNegative(-1) === true);
  console.log(isNegative(-100.20) === true);
}

module.exports = isNegative;
