function fruit(fruit,weight,money) {

    let kg = weight / 1000;
    console.log(`I need $${(money*kg).toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${fruit}.`);
}  

fruit('orange', 2500, 1.80);