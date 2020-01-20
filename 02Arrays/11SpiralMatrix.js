function spiralMatrix(matrixRows, matrixCols) {

    const matrix = [];

    for (let i = 0; i < matrixRows; i++) {

        matrix[i] = [];

        for (let j = 0; j < matrixCols; j++) {

            matrix[i][j] = 0;
        }
    }

    let num = 1;
    let right = 0;
    let down = matrixCols - 1;
    let left = matrixRows - 1;
    let up = 0;

    while (num <= matrixRows * matrixCols) {

        for (let i = 0; i < matrixCols; i++) {

            if (matrix[right][i] === 0) {

                matrix[right][i] = num;
                num++;
            }
        }
        right++;

        for (let i = 0; i < matrixRows; i++) {

            if (matrix[i][down] === 0) {

                matrix[i][down] = num;
                num++;
            }
        }
        down--;

        for (let i = matrixCols - 1; i >= 0; i--) {

            if (matrix[left][i] === 0) {

                matrix[left][i] = num;
                num++;
            }
        }
        left--;

        for (let i = matrixRows - 1; i >= 0; i--) {

            if (matrix[i][up] === 0) {

                matrix[i][up] = num;
                num++;
            }
        }
        up++;
    }
    console.log(matrix.map(x => x.join(` `)).join(`\n`));
}
spiralMatrix(3, 3);