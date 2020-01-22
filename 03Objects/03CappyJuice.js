function cappyJuice(array = []) {

    let result = [];

    array.reduce((acc, el) => {
        let splitEl = el.split(` => `);
        let obj = { name: splitEl[0], gr: +splitEl[1], bottles: 0 }
        acc.push(obj);
        return acc;
    }, [])
        .reduce((ac, e) => {
            if (ac.some(x => x.name === e.name)) {
                ac.map(x => {
                    if (x.name === e.name) {
                        x.gr += e.gr;

                        if (x.gr / 1000 >= 1) {

                            if (x.bottles === 0) {
                                result.push(x)
                            }
                            x.bottles = Math.floor(x.gr / 1000) ;
                        }
                    }
                })
            } else {
                ac.push(e);

                if (e.gr / 1000 >= 1) {
                    e.bottles = Math.floor(e.gr / 1000);
                    result.push(e);
                }
            }
            return ac;
        }, [])

    return result.forEach(x => console.log(`${x.name} => ${x.bottles}`));
}
(cappyJuice([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
))