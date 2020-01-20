function diagonalAttack(array = []) {

    const matrix = array.map(x => x.split(` `).map(y => +y));

    let sumDiagonal1 = 0;
    let sumDiagonal2 = 0;

    for (let index = 0; index < matrix.length; index++) {

        sumDiagonal1 += matrix[index][index];
        sumDiagonal2 += matrix[index][matrix.length - 1 - index];
    }

    if (sumDiagonal1 === sumDiagonal2) {

        for (let row = 0; row < matrix.length; row++) {

            for (let col = 0; col < matrix.length; col++) {

                if (row !== col && col !== matrix.length - 1 - row) {

                    matrix[row][col] = sumDiagonal1;
                }
            }
        }
    }

    console.log(matrix.map(x => x.join(` `)).join(`\n`));
}
diagonalAttack([
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']);