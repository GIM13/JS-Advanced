function magicMatrices(array = [[]]) {

    let result = true;
    const sum = array[0].reduce((a, b) => a + b);

    for (let col = 0; col < array[0].length; col++) {

        let sumCol = 0;

        for (let row = 0; row < array.length; row++) {

            if (sum !== array[col].reduce((a, b) => a + b)) {
                result = false;
                col = array[0].length;
                break;
            }
            sumCol += array[row][col]
        }
        if (sum !== sumCol) {
            result = false;
            break;
        }
    }
    return result;
}
console.log(magicMatrices([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   ));