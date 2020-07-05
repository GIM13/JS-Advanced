function arenaTier() {

    const gladiators = {};

        let array = str.split(str.includes(`->`) ? ` -> ` : ` vs `);

        if (array.length === 3) {

            let keyyss = Object.keys(gladiators);

            if (!keyyss.includes(array[0])) {

                gladiators[array[0]] = [];
            }
            gladiators[array[0]][array[1]] = +array[2];

        } else if (str.length === 2) {

        }

        console.log(gladiators);
};
arenaTier(`Pesho -> Duck -> 400`);
arenaTier(`Julius -> Shield -> 150`);
arenaTier(`Gladius -> Heal -> 200`);
arenaTier(`Gladius -> Support -> 250`);
arenaTier(`Gladius -> Shield -> 250`);
arenaTier(`Pesho vs Gladius`);
arenaTier(`Gladius vs Julius`);
arenaTier(`Gladius vs Gosho`);
arenaTier(`Ave Cesar`);