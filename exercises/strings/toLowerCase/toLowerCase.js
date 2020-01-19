/**
 * Given an input string, returns a copy of the string with all-lowercase letters.
 *
 * Don't use JavaScript's built-in string.toLowerCase
 *
 * Only worry about characters in the ASCII range: http://www.asciitable.com/
 *
 * Do nothing to characters that have no corresponding lowercase character, e.g.,
 * don't do anything special for a space, a number, a dash, etc.
 *
 * @example
 * toLowerCase('HelLo fRiends!'); // => 'hello friends!'
 *
 * @param {string} string - The string to replace a character in
 * @returns {string} A lowercase copy of the input string
 */

function toLowerCase(string) {
  // Create a new empty string to return
  let stringLower = '';

  // Use for loop using ASCII range/codes
  for (let char of string){
    let charCode = char.charCodeAt();
    if (charCode >= 65 && charCode <= 90){
      stringLower += String.fromCharCode(charCode + 32);
    } else {
      stringLower += char;
    }
  }
  return stringLower;
}

if (require.main === module) {
  console.log('Running sanity checks for toLowerCase:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?

  console.log(toLowerCase('HellO fRiEnds') === 'hello friends');
  console.log(toLowerCase('HI MOM') === 'hi mom');
}

module.exports = toLowerCase;
