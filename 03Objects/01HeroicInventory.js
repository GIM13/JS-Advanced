function heroicInventory(array = []) {

    const heroes = [];

    for (let index = 0; index < array.length; index++) {

        const hero = array[index].split(` / `);

        heroes.push({
            name: hero[0],
            level: +hero[1],
            items: hero.length > 2 ? hero[2].split(`, `) : []
        });
    }
    let heroesJSON = JSON.stringify(heroes);

    console.log(heroesJSON);
}
heroicInventory([
    'Jake / 1000 ']
)