function systemComponents(array = []) {

    const result = array
        .reduce((acc, el) => {
            let [systemName, componentName, subcomponentName] = el.split(` | `)

            if (!acc[systemName]) {
                acc[systemName] = {};
            }
            if (!acc[systemName][componentName]) {
                acc[systemName][componentName] = [];
            }
            acc[systemName][componentName].push(subcomponentName);

            return acc;
        }, {});

    Object.keys(result)
    .sort((a,b) => Object.keys(result[b]).length - Object.keys(result[a]).length || a.localeCompare(b))
    .map(x => {
        console.log(x);

        Object.keys(result[x])
        .sort((a,b) => Object.keys(result[x][b]).length - Object.keys(result[x][a]).length)
        .map(y => {
            console.log(`|||${y}`);

            result[x][y].map(z => {
                console.log(`||||||${z}`);
            })
        })
    });
}

systemComponents([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security']
)