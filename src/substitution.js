// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // test the parameters to the rules given. if it one of the rules doesn't follow it will return false.
    if (!input || !alphabet || alphabet.length !== 26){return false};
      if (Array.from(new Set(alphabet)).length !== 26){return false};
//set variables
      let abcs = 'abcdefghijklmnopqrstuvwxyz'; //the correct alphabet
      alphabet = alphabet.split(''); //seperates all the letters in the new alphabet given into their own strings
      input = input.toLowerCase(); // sets input to lowercase
      // new empty variables
      let subResult = {};
      let decode = {};
      let result = '';
//forEach, map and arrow funct through
      abcs.split('').forEach((letter, index) => {
          subResult[letter] = alphabet[index]; 
          decode[alphabet[index]] = letter;
      })
//if encode is false
      if (!encode) subResult = decode;
      input.split('').forEach(input => {
          result += input === ' ' ? ' ' : subResult[input]
      })
//return it
      return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
