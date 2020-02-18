const StringBuilder = require(`./StringBuilder`);
const assert = require(`chai`).assert;

describe(`check StringBuilder`, () => {
    it(`check for _vrfyParam`, () => {
        let resut = () => new StringBuilder(1);
        assert.throw(resut, `Argument must be string`);
    });
    it(`check for undefined param`, () => {
        let resut = new StringBuilder(undefined);
        assert.isArray(resut._stringArray);
    });
    it(`check for correct param`, () => {
        let resut = new StringBuilder(`string`);
        assert.deepEqual(resut._stringArray,[`s`,`t`,`r`,`i`,`n`,`g`]);
    });
    it(`check for append`, () => {
        let resut = new StringBuilder(`str`);
        resut.append(`ing`);
        assert.deepEqual(resut._stringArray,[`s`,`t`,`r`,`i`,`n`,`g`]);
    });
    it(`check for prepend`, () => {
        let resut = new StringBuilder(`ing`);
        resut.prepend(`str`);
        assert.deepEqual(resut._stringArray,[`s`,`t`,`r`,`i`,`n`,`g`]);
    });
    it(`check for insertAt`, () => {
        let resut = new StringBuilder(`stng`);
        resut.insertAt(`ri`,2);
        assert.deepEqual(resut._stringArray,[`s`,`t`,`r`,`i`,`n`,`g`]);
    });
    it(`check for remove`, () => {
        let resut = new StringBuilder(`strrrrring`);
        resut.remove(3,4);
        assert.deepEqual(resut._stringArray,[`s`,`t`,`r`,`i`,`n`,`g`]);
    });
    it(`check for toString`, () => {
        let resut = new StringBuilder(`string`);
        assert.equal(resut.toString(),`string`);
    });
});