/**
 * Given an array of numbers, returns true if _any_ element is positive
 * and false otherwise.
 *
 * @example
 * anyPositive([1, 2, 3, 4, 5]); // => true
 * anyPositive([1, 2, -3, 4, 5]); // => true
 * anyPositive([0, 0, 1]); // => true
 * anyPositive([-10, -10, -10]); // => false
 * anyPositive([-10, -10, 1]); // => true
 *
 * @param {number[]} array - An array of numbers
 * @returns {boolean} True if every number in the input array is positive
 *   and false otherwise.
 */
function anyPositive(array) {
  for (let num of array){
    if (num > 0){
      return true;
    }
  }
  return false;
}

if (require.main === module) {
  console.log('Running sanity checks for anyPositive:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?

  console.log(anyPositive([1,-2,-3])===true);
  console.log(anyPositive([0,-1,0])===false);
  console.log(anyPositive([1,2,3])===true);
  
}

module.exports = anyPositive;
