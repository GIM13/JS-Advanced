let isOddOrEven = require(`./isOddOrEven.js`);

let assert = require(`chai`).assert;

describe(`check`, () => {
    it(`check undefined`, () => {
        assert.equal(isOddOrEven(9.8, undefined));
    });
    it(`check even`, () => {
        assert.equal(isOddOrEven(2, `even`));
    });
    it(`check odd`, () => {
        assert.equal(isOddOrEven(1, `odd`));
    });
});