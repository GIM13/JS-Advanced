function argumentInfo(...args) {

    let result;
    let obj = {};

    Object.values(arguments).map(x => obj[typeof (x.values())] = x.values());

    console.log(arguments);
}
argumentInfo('cat', 42, function () { console.log('Hello world!'); })