// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // setting the values of each letter with the corasponding numbers on the Polybius Square to encode message
    let alpha = {
      a: "11", b: "21", c: "31", d: "41", e: "51", f: "12", g: "22",
      h: "32", i: "42", j: "42", k: "52", l: "13", m: "23", n: "33",
      o: "43", p: "53", q: "14", r: "24", s: "34", t: "44", u: "54",
      v: "15", w: "25", x: "35", y: "45", z: "55", [' ']: " "
  };
  // setting the values of the numbers of the Polybius Square to it corresponding letter for decoding purposes.
  let decoded = {
      11: "a", 12: "f", 13: "l", 14: "q", 15: "v", 21: "b", 22: "g",
      23: "m", 24: "r", 25: "w", 31: "c", 32: "h", 33: "n", 34: "s",
      35: "x", 41: "d", 42: "(i/j)", 43: "o", 44: "t", 45: "y",
      51: "e", 52: "k", 53: "p", 54: "u", 55: "z", [' ']: " "
  };
//encode/decode
  if (encode){
    // seperates all letters of the string individually including the spaces.
      return input.split('').map(letter => {
         // finds the corresponding number to the lowercase of the letter given
          return alpha[letter.toLowerCase()]
      }).join(''); // joins new numbers given and give the encoded message
  }
  // if encode is false will run code below to decode the message.
  else {
    //test if the message given is an even amount of numbers excludes all spaces present. if not the coded message is invalid and will return false.
      if(input.replace(/\s/g,'').length %2 !== 0){return false}
      // will join every 2 numbers(that range from 0-9) and seprate them into new integers as well as seperate all the spaces from the numbers.(for example 334455 6677 will become 33,44,55,' ',66,77)
      return input.match(/[0-9]{2}|\s/g).map(number => {
         //finds each letter that correspondes with numbers given and returns that letter.
          return decoded[number]
      }).join('') //joins each new letter along with the spaces that were present prior to form new decoded message
  }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
