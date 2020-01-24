function uniqueSequences(array = []) {

    return array
        .map(x => JSON.parse(x))
        .map(x => x.sort((a, b) => b - a))
        .map(x => JSON.stringify(x))
        .reduce((acc, el) => {
            if (!acc.includes(el)) {
                acc.push(el)
            }
            return acc
        }, [])
        .map(x => JSON.parse(x))
        .sort((a, b) => a.length - b.length)
        .forEach(x => console.log(`[${x.join(`, `)}]`));
}
console.log(uniqueSequences([
    "[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"]
))