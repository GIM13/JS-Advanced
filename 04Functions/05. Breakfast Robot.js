const breakfastRobot = (function () {

    let store = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }
    let dishes = {
        apple: {
            protein: 0,
            carbohydrate: 1,
            fat: 0,
            flavour: 2
        },
        burger: {
            protein: 0,
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        lemonade: {
            protein: 0,
            carbohydrate: 10,
            fat: 0,
            flavour: 20
        },
        eggs: {
            protein: 5,
            carbohydrate: 0,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    }
    return function (str = ``) {

        let result = ``;

        let [command, key, value] = [...str.split(` `)];

        if (command === `restock`) {

            store[key] += +value;

            result = `Success`;

        } else if (command === `prepare`) {

            if (dishes[key].carbohydrate * +value <= store.carbohydrate
                && dishes[key].protein * +value <= store.protein
                && dishes[key].fat * +value <= store.fat
                && dishes[key].flavour * +value <= store.flavour) {

                store.carbohydrate -= dishes[key].carbohydrate * +value;
                store.protein -= dishes[key].protein * +value;
                store.fat -= dishes[key].fat * +value;
                store.flavour -= dishes[key].flavour * +value;

                result = `Success`;

            } else {

                let lack = ``;

                if (dishes[key].carbohydrate * +value > store.carbohydrate) {
                    lack =`carbohydrate`;
                }else if (dishes[key].protein * +value > store.protein) {
                    lack =`protein`;
                }else if (dishes[key].fat * +value > store.fat) {
                    lack =`fat`;
                }else if (dishes[key].flavour * +value > store.flavour) {
                    lack =`flavour`;
                }
              
                result = `Error: not enough ${lack} in stock`;
            }
        } else if (command === `report`) {

            result = Object.keys(store)
                .reduce((acc, el) => {
                    return acc + `${el}=${store[el]} `
                }, ``)
                .trim();
        }
         console.log(result);
         return result;
    }
})();
breakfastRobot('prepare lemonade 4')
breakfastRobot(`restock protein 100`);
breakfastRobot('restock carbohydrate 100');
breakfastRobot('restock fat 100');
breakfastRobot('restock flavour 100');
breakfastRobot('prepare lemonade 4')
breakfastRobot(`report`);
