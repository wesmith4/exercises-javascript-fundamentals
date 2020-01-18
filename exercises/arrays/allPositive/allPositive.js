/**
 * Given an array of numbers, returns true if _every_ element is positive
 * and false otherwise.
 *
 * @example
 * allPositive([1, 2, 3, 4, 5]); // => true
 * allPositive([1, 2, -3, 4, 5]); // => false
 * allPositive([0, 0, 1]); // => false
 *
 * @param {number[]} array - An array of numbers
 * @returns {boolean} True if every number in the input array is positive
 *   and false otherwise.
 */
function allPositive(array) {
  for (let num of array){
    if (num <= 0){
      return false;
    }
  }
  return true;
}

if (require.main === module) {
  console.log('Running sanity checks for allPositive:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?

  console.log(allPositive([1,,2,3])===true);
  console.log(allPositive([-1,3,4])===false);
  console.log(allPositive([0,1,2])===false);
}

module.exports = allPositive;
