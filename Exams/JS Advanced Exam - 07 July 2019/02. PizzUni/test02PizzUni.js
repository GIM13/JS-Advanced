const PizzUni = require(`./02PizzUni`);
const assert = require(`chai`).assert;

describe("PizzUni", () => {
    describe("constructor", () => {

        it("check for registeredUsers", () => {
            let pizzUni = new PizzUni();
            assert.deepEqual(pizzUni.registeredUsers, [])
        });
        it("check for availableProducts pizzas", () => {
            let pizzUni = new PizzUni();
            assert.deepEqual(pizzUni.availableProducts.pizzas, ['Italian Style', 'Barbeque Classic', 'Classic Margherita'])
        });
        it("check for availableProducts drinks", () => {
            let pizzUni = new PizzUni();
            assert.deepEqual(pizzUni.availableProducts.drinks, ['Coca-Cola', 'Fanta', 'Water'])
        });
        it("check for orders", () => {
            let pizzUni = new PizzUni();
            assert.deepEqual(pizzUni.orders, [])
        });
    });
    describe("registerUser", () => {
        it("check for registering new user ", () => {
            let pizzUni = new PizzUni();
            pizzUni.registerUser(`email@email.bg`);
            let result = pizzUni.doesTheUserExist(`email@email.bg`);
            assert.deepEqual(result, { email: `email@email.bg`, orderHistory: [] });
        });
        it("check for registering old user ", () => {
            let pizzUni = new PizzUni();
            pizzUni.registerUser(`email@email.bg`);
            assert.throw(() => pizzUni.registerUser(`email@email.bg`), `This email address (email@email.bg) is already being used!`);
        });
    });
    describe("makeAnOrder", () => {
        it("check for missing user ", () => {
            let pizzUni = new PizzUni();
            assert.throw(() => pizzUni.makeAnOrder(`email@email.bg`, `pizza`, `cola`), `You must be registered to make orders!`);
        });
        it("check for missing pizza ", () => {
            let pizzUni = new PizzUni();
            pizzUni.registerUser(`email@email.bg`);
            assert.throw(() => pizzUni.makeAnOrder(`email@email.bg`, `pizza`, `cola`), `You must order at least 1 Pizza to finish the order.`);
        });
        it("check for corect input", () => {
            let pizzUni = new PizzUni();
            pizzUni.registerUser(`email@email.bg`);
            pizzUni.makeAnOrder(`email@email.bg`, 'Italian Style', 'Water');
            assert.deepEqual(pizzUni.orders, [{
                orderedPizza: 'Italian Style',
                orderedDrink: 'Water',
                email: `email@email.bg`,
                status: 'pending'
            }]);
        });
    });
    describe("detailsAboutMyOrder", () => {
        it("check for status", () => {
            let pizzUni = new PizzUni();
            pizzUni.registerUser(`email@email.bg`);
            pizzUni.makeAnOrder(`email@email.bg`, 'Italian Style', 'Water');
            assert.equal(pizzUni.detailsAboutMyOrder(0),`Status of your order: pending`);
        });
    });
    describe("completeOrder", () => {
        it("completeOrder", () => {
            let pizzUni = new PizzUni();
            pizzUni.registerUser(`email@email.bg`);
            pizzUni.makeAnOrder(`email@email.bg`, 'Italian Style', 'Water');
            assert.deepEqual(pizzUni.completeOrder(), {
                orderedPizza: 'Italian Style',
                orderedDrink: 'Water',
                email: `email@email.bg`,
                status: 'completed'
            });
        });
    });
});