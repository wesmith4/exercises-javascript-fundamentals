/**
 * Given an array of integers, returns a new array consisting of only
 * the odd integers from the original array.
 *
 * Return an empty array if no such numbers exist.
 *
 * @example
 * selectOdds([1, 2, 3, 4, 5]); // => [1, 3, 5]
 * selectOdds([10, 2, 19, 10, -103]); // => [19, -103]
 * selectOdds([1, 1, 2, 1]); // => [1, 1, 1]
 * selectOdds([10, 20, 30]); // => []
 *
 * @param {number[]} array - An array of numbers
 * @returns {number[]} A new array consisting of all the odd numbers in the input array
 */
function selectOdds(array) {
  const odds = [];
  for (let element of array){
    if (element%2 != 0){
      odds.push(element);
    }
  }
  return odds;
}

function outputEqualsExpected(output,expected){
  if (output.length !== expected.length){
    return false;
  }
  for (let i = 0; i < output.length; i++){
    if (output[i] !== expected[i]){
      return false;
    }
  }
  return true;
}

if (require.main === module) {
  console.log('Running sanity checks for selectOdds:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?

  console.log(outputEqualsExpected(selectOdds([1,2,3,4,5]), [1,3,5]));
  console.log(outputEqualsExpected(selectOdds([2,4,6,8]),[]));
}

module.exports = selectOdds;
