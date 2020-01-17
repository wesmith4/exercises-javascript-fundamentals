/**
 * Given two integers, returns the sum of all integers between those two integers, inclusive.
 *
 * For example:
 *
 * @example
 * sumOfRange(1, 5) // => 15 (i.e., 1 + 2 + 3 + 4 + 5)
 * sumOfRange(-3, 4) // => 4 (i.e., 3 + -2 + -1 + 0 + 1 + 2 + 3 + 4)
 *
 * @param {number} leftSummand - The left integer of the range to sum
 * @param {number} rightSummand - The right integer of the range of sum
 * @returns {boolean} The sum of every integer between the two input integers, inclusive
 */
function sumOfRange(leftSummand, rightSummand) {
  let workingSum = 0;
  for (let n = leftSummand; n <= rightSummand; n++){
    sum += n;
  }
  return workingSum;
}

if (require.main === module) {
  console.log('Running sanity checks for sumOfRange:');

  // Your sanity checks go here
  console.log(sumOfRange(1,3) === 6);
  console.log(sumOfRange(20,24) === 110);
  console.log(sumOfRange(-4,0) === -10);
}

module.exports = sumOfRange;
