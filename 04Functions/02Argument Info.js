function argumentInfo(...args) { 
    let obj = {};

    args.map(x => {

        if (!obj.hasOwnProperty([typeof x])) {
            obj[typeof x] = 0;
        }

        obj[typeof x]++;

        console.log(`${typeof x}: ${x}`);
    });

    Object.entries(obj)
    .sort((a,b) => b[1] - a[1])
    .forEach( x => {

        console.log(`${x[0]} = ${x[1]}`)
    });
}
argumentInfo(42, 'cat', 15, 'kitten', 'tomcat')