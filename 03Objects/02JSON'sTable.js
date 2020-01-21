function JSONsTable(array = []) {

    let result = array
        .map(x => JSON.parse(x))
        .map(x => Object.values(x))
        .map(x => x.reduce((acc, el) => {
            return acc + `\n\t\t<td>${el}</td>`;
        }, ``))
        .reduce((acc, el) => {
            return acc + `\n\t<tr>${el}\n\t</tr>`
        }, ``)

    console.log(`<table>${result}\n</table>`);
}
JSONsTable([
    '{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}'])