const lookupChar = require(`./03CharLookup`);
const assert = require(`chai`).assert;

describe(`03CharLookup`, () => {
    it(`check for invalid string`, () => {
        assert.equal(lookupChar(1, 1),undefined);
    });
    it(`check for invalid index`, () => {
        assert.equal(lookupChar(`string`, `str`),undefined);
    });
    it(`check for invalid index range`, () => {
        assert.equal(lookupChar(`string`, -1),`Incorrect index`);
    });
    it(`check for invalid index range`, () => {
        assert.equal(lookupChar(`string`, 6),`Incorrect index`);
    });
    it(`check for correct data`, () => {
        assert.equal(lookupChar(`string`, 4),`n`);
    });
})