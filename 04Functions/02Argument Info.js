function argumentInfo(...args) {
    let obj = {};

    let counter = (function () {
        return function (num = 0) {
            return num += 1;
        }
    })()

    args.map(x => {

        obj[typeof x] = counter(obj[typeof x]);

        console.log(`${typeof x}: ${x}`);
    });

    Object.entries(obj)
        .sort((a, b) => b[1] - a[1])
        .forEach(x => {

            console.log(`${x[0]} = ${x[1]}`)
        });
}
argumentInfo(42, 'cat', 15, 'kitten', 'tomcat');
