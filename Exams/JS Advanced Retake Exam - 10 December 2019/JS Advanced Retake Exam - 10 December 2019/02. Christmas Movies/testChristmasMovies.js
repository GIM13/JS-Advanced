const ChristmasMovies = require(`./ChristmasMovies`);
const assert = require(`chai`).assert;

describe("ChristmasMovies", () => {
    describe("constructor", () => {

        it("check for movieCollection", () => {
            let christmasMovies = new ChristmasMovies();
            assert.deepEqual(christmasMovies.movieCollection, [])
        });
        it("check for watched", () => {
            let christmasMovies = new ChristmasMovies();
            assert.deepEqual(christmasMovies.watched, {})
        });
        it("check for actors", () => {
            let christmasMovies = new ChristmasMovies();
            assert.deepEqual(christmasMovies.actors, [])
        });
    });
    describe("buyMovie", () => {
        it("check for an existing movie", () => {
            let christmasMovies = new ChristmasMovies();
            christmasMovies.buyMovie(`movieName`, `actors`);
            assert.throw(() => christmasMovies.buyMovie(`movieName`, `actors`), `You already own movieName in your collection!`);
        });
        it("check for movie", () => {
            let christmasMovies = new ChristmasMovies();
            assert.equal(christmasMovies.buyMovie(`movieName`, [`actors`]), `You just got movieName to your collection in which actors are taking part!`);
        });
    });
    describe("discardMovie", () => {
        it("check for missng movie", () => {
            let christmasMovies = new ChristmasMovies();
            assert.throw(() => christmasMovies.discardMovie(`movieName`), `movieName is not at your collection!`);
        });
        it("check for missng movie", () => {
            let christmasMovies = new ChristmasMovies();
            assert.throw(() => christmasMovies.discardMovie(`movieName`), `movieName is not at your collection!`);
        });
    });
    describe("detailsAboutMyOrder", () => {

    });
    describe("completeOrder", () => {
        
    });
});