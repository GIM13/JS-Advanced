function storeCatalogue(array = []) {

    let result = array
        .map(x => x.split(` : `).join(`: `))
        .reduce((acc, el) => {

            if (!acc[el[0]]) {
                acc[el[0]] = [];
            }
            acc[el[0]].push(el);
            return acc;
        }, {})

    Object.keys(result).sort().map(x => {
        console.log(x);
        result[x].sort().map(y => console.log(`  ${y}`))
    })
}
storeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
)