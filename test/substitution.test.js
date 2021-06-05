// Write your tests here!
const {substitution} = require("../src/substitution.js")
const expect = require('chai').expect;

describe('Substitution tests', () => {
    //uses all examples from instructions to verify that all code passes properly
    it('Encode, no spaces, handles capital letters', () => {
        const actual = substitution("ThinkfuL", "xoyqmcgrukswaflnthdjpzibev");
        const expected = "jrufscpw";
        expect(actual).to.equal(expected);
    })
    
    it('Encode, yet returns false for duplicate letters in given alphabet', () => {
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzippp");
        const expected = false;
        expect(actual).to.equal(expected);
    })
    
    it('return false if given alphabet is less than 26', () => {
        const actual = substitution("thinkful", "xoyqmcgrukswaflnv");
        const expected = false;
        expect(actual).to.equal(expected);
    })
    
    it('Encode, with spaces', () => {
      const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
      const expected = 'elp xhm xf mbymwwmfj dne';
        expect(actual).to.equal(expected);
    })
    
    it('Decode, no spaces', () => {
        const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
        const expected = "thinkful";
        expect(actual).to.equal(expected);
    })
    
})
