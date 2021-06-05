// Write your tests here!
const {caesar} = require('../src/caesar.js');
const expect = require('chai').expect;

describe('Caesar shift', () => {
    it(`return false if shift is 0, < -25, >25`, () => {
        let actual =( caesar("thinkful", 0) || caesar("thinkful", -26) || caesar("thinkful",  26));
       // let expected = false;
        expect(actual).to.be.false;
    })
    // uses all examples provided in the intructions to verify that all code passes properly
    it(`ignores capital letters and handles past the letter z`, () => {
        let actual = (caesar("Zebra Magazine", 3));
        let expected = 'cheud pdjdclqh';
        expect(actual).to.equal(expected);
    }) 
    
    it(`(thinkful, 3) should be: wklqnixo`, () => {
        let actual = caesar("thinkful", 3)
        let expected = 'wklqnixo';
        expect(actual).to.equal(expected);
    })
    
    it(`(thinkful, 3, false) should be: thinkful`, () => {
        let actual = caesar("wklqnixo", 3, false);
        let expected = 'thinkful';
        expect(actual).to.equal(expected);
    })
    
    it(`(This is a secret message!, 8) should be: bpqa qa i amkzmb umaaiom!`, () => {
        let actual = caesar("This is a secret messge!", 8);
        let expected = 'bpqa qa i amkzmb umaaom!';
        expect(actual).to.equal(expected);
    })
    
    it(`(thinkful) should be: false`, () => {
        let actual = caesar("thinkful");
        let expected = false;
        expect(actual).to.eql(expected);
    })
       
})