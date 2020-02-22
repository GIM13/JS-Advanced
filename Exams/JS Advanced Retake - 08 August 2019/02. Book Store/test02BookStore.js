const BookStore = require(`./02BookStore`);
const assert = require(`chai`).assert;

describe("BookStore.js", () => {
    describe("constructor", () => {
        it("check for name,_workers and books", () => {
            let bookStore = new BookStore(`Book Store`);
            assert.equal(bookStore.name, `Book Store`);
            assert.deepEqual(bookStore.books, []);
            assert.deepEqual(bookStore._workers, []);
        });
    });
    describe("get workers", () => {
        it("check for workers", () => {
            let bookStore = new BookStore(`Book Store`);
            assert.deepEqual(bookStore.workers, []);
        });
    });
    describe("stockBooks", () => {
        it("check for new books", () => {
            let bookStore = new BookStore(`Book Store`);
            assert.deepEqual(bookStore.stockBooks([`title-author`]), [{ title: `title`, author: `author`}]);
        });
    });
    describe("hire", () => {
        it("check for input new worker", () => {
            let bookStore = new BookStore(`Book Store`);
            assert.equal(bookStore.hire(`Sisi`, `position`),`Sisi started work at Book Store as position`);
        });
        it("check for input existing worker", () => {
            let bookStore = new BookStore(`Book Store`);
            bookStore.hire(`Sisi`, `position`);
            assert.throw(() => bookStore.hire(`Sisi`, `position`),`This person is our employee`);
        });
    });
    describe("fire", () => {
        it("check for not existing worker", () => {
            let bookStore = new BookStore(`Book Store`);
            assert.throw(() => bookStore.fire(`Sisi`),`Sisi doesn't work here`);
        });
        it("check for existing worker", () => {
            let bookStore = new BookStore(`Book Store`);
            bookStore.hire(`Sisi`, `position`);
            assert.equal( bookStore.fire(`Sisi`),`Sisi is fired`);
        });
    });
    describe("sellBook", () => {
        it("check for not existing book", () => {
            let bookStore = new BookStore(`Book Store`);
            assert.throw(() => bookStore.sellBook(`Pipi`,`Sisi`),`This book is out of stock`);
        });
        it("check for not existing worker", () => {
            let bookStore = new BookStore(`Book Store`);
            bookStore.stockBooks([`Pipi-author`]);
            assert.throw(() => bookStore.sellBook(`Pipi`,`Sisi`),`Sisi is not working here`);
        });
        it("check for existing book and worker", () => {
            let bookStore = new BookStore(`Book Store`);
            bookStore.stockBooks([`Pipi-author`]);
            bookStore.hire(`Sisi`, `position`);
            bookStore.sellBook(`Pipi`, `Sisi`)
            let result = bookStore.workers.filter(w => w.name === `Sisi`)[0];
            assert.equal(result.booksSold,1)
        });
        it("check for remove book ", () => {
            let bookStore = new BookStore(`Book Store`);
            bookStore.stockBooks([`Pipi-author`]);
            bookStore.hire(`Sisi`, `position`);
            bookStore.sellBook(`Pipi`, `Sisi`)
            assert.deepEqual(bookStore.books, []);
        });
    });
    describe("printWorkers", () => {
        it("check workers", () => {
            let bookStore = new BookStore(`Book Store`);
            bookStore.hire(`Sisi`, `position`);
            assert.equal( bookStore.printWorkers(),`Name:Sisi Position:position BooksSold:0`);
        });
    });
});