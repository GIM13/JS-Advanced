const mathEnforcer = require(`./MathEnforcer`);
const assert = require(`chai`).assert;

describe(`check mathEnforcer`, () => {
    it(`check  addFive for corect data`, () => {
        assert.equal(mathEnforcer.addFive(2), 7);
    });
    it(`check  addFive for undefined`, () => {
        assert.equal(mathEnforcer.addFive(`string`), undefined);
    });
    it(`check  subtractTen for corect data`, () => {
        assert.equal(mathEnforcer.subtractTen(11), 1);
    });
    it(`check  subtractTen for undefined`, () => {
        assert.equal(mathEnforcer.subtractTen(`string`), undefined);
    });
    it(`check  sum for corect data`, () => {
        assert.equal(mathEnforcer.sum(1, 1), 2);
    });
    it(`check  sum for undefined`, () => {
        assert.equal(mathEnforcer.sum(`str`, 1), undefined,
            `invalid param 1`);
    });
    it(`check  sum for undefined `, () => {
        assert.equal(mathEnforcer.sum(1, `str`), undefined,
            `invalid param 2`);
    });
    it(`check  sum for 0.001`, () => {
        assert.closeTo(mathEnforcer.sum(0.2, -0.1), 0.1, 0.001);
    });
});