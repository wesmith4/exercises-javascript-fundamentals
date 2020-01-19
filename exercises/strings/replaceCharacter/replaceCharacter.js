/**
 * Given an input string, a target character to find, and a replacement character,
 * returns a copy of the input string with the target character replaced by the
 * replacement character.
 *
 * @example
 * replaceCharacter('hello', 'l', '8'); // => 'he88o'
 *
 * @param {string} string - The string to replace a character in
 * @param {string} target - The target letter
 * @param {string} replaceWith - The replacement letter
 * @returns {string} A copy of the input string with target replaced by replaceWith
 */

function replaceCharacter(string, target, replaceWith) {
  let letters = string.split('');
  for (let letter of letters){
    if (letter === target){
      letters.splice(letters.indexOf(letter), 1, replaceWith);
    }
  }
  return letters.join('');

}
console.log(replaceCharacter('hi', 'i', '7'));
if (require.main === module) {
  console.log('Running sanity checks for replaceCharacter:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?

  console.log(replaceCharacter('hi', 'i', '7') === 'h7');
  console.log(replaceCharacter('eel', 'e', 'o') === 'ool');
}

module.exports = replaceCharacter;
