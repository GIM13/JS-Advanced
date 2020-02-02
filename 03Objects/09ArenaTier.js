function arenaTier(str) {

    let gladiators = [];

    for (const info of str) {

        let array;

        if (info.includes(`->`)) {

            array = info.split(` -> `);

            let keyyss = Object.keys(gladiators);

            if (!keyyss.includes(array[0])) {

                gladiators[array[0]] = [];
            }

            gladiators[array[0]][array[1]] = +array[2];

        } else if (info.includes(` vs `)) {

            array = info.split(` vs `);

            for (const key0 in gladiators[array[0]]) {
                for (const key1 in gladiators[array[1]]) {

                    if (key0 === key1) {

                        if (gladiators[array[0]][key0] > gladiators[array[1]][key1]) {

                            delete gladiators[array[1]];

                        } else if (gladiators[array[0]][key0] < gladiators[array[1]][key1]) {

                            delete gladiators[array[0]];
                        }
                    }
                }
            }
        } else if (info.includes(`Ave Cesar`)) {

            function skill(z) {
                return Object.entries(z)
                    .reduce((sum, el) => {
                        sum += +el[1];
                        return sum;
                    }, 0);
            }
            gladiators = Object.entries(gladiators);
            gladiators.map(x => x[2] = +skill(x[1]));
            console.log(gladiators)
            gladiators
                .sort((a, b) => {

                    b[2]- a[2] || a[0].localeCompare(b[0]);

                })
                .map(x => {

                    console.log(`${x[0]}: ${skill(x[1])} skill`);

                    Object.entries(x[1])
                        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
                        .map(x => {
                            console.log(`- ${x[0]} <!> ${x[1]}`);
                        });
                });
        };

    };
};
arenaTier([
    'Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Pesho vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Gosho',
    'Ave Cesar'
]
);