/**
 * Given an array of numbers and a treshold value, returns a new array
 * consisting of only those numbers strictly greater than the threshold.
 *
 * Return an empty array if no such numbers exist.
 *
 * @example
 * selectGreaterThan([1, 2, 3, 4, 5], 2); // => [3, 4, 5]
 * selectGreaterThan([1, 2, 3, 4, 5], 17); // => []
 * selectGreaterThan([1, 2, 1, 2, 3, 4, 1, 2, 1], 1); // => [2, 2, 3, 4, 2];
 * selectGreaterThan([10, 10, 10, -10, 15], 10); // => [15]
 * selectGreaterThan([10, 20, 30, 40], 100); // => []
 *
 * @param {number[]} array - An array of numbers
 * @param {number} threshold - The threshold for selecting
 * @returns {number[]} A new array consisting of all the numbers in input array
 *  strictly greater than the threshold
 */
function selectGreaterThan(array, threshold) {
  const greaterThan = [];
  for (let element of array){
    if (element > threshold){
      greaterThan.push(element);
    }
  }
  return greaterThan;
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
  console.log('Running sanity checks for selectGreaterThan:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?

  console.log(outputEqualsExpected(selectGreaterThan([1,2,3,4,5], 2), [3,4,5]));
  console.log(outputEqualsExpected(selectGreaterThan([7,8,9], 10), []));
}

module.exports = selectGreaterThan;
