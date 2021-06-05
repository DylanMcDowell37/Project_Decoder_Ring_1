// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // test the parameters given and returns false if it does not follow the proper rules.
    if (!shift || shift === 0 || shift > 25 || shift < -25){
      return false;
  }
  // changes the shift to the opposite to decode instead of encode if the false parameter is given.
  if (!encode) {shift *= -1}; 
  // seperates each letter in the string individually and loops all letter throught the statements below.
  return input.toLowerCase().split('').map((letter) => {
    // if the "letter" is less than 97 on the ASCII table returns the "letter" as is (ie if there is a space ASCII 32 it will still be a space)
      if (letter.charCodeAt(0) < 97) {return letter};
      // sets new variable of charNum to equal the ASCII table number of "letter" plus the shift parameter given
      let charNum = letter.charCodeAt(0) + parseInt(shift)
      // if the shift causes the letter to surpass "z" if will loop if back to the begining of "a"
      if (charNum > 122){
          charNum = 96 + (charNum - 122)
      }
      // if shift(going backwards) causes the letter to go pass "a" will loop down to "z"
      else if(charNum < 97){
        charNum += 26
      } //after code range checks, submit codes
            return String.fromCharCode(charNum)
  }).join(''); // joins together the new encoded or decoded message
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
