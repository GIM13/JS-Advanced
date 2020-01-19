function orbit(array = []) {

    let matrixRows = array[0];
    let matrixCols = array[1];
    let starRow = array[2];
    let starCol = array[3];

    const matrix = [];

    for (let i = 0; i < matrixRows; i++) {

        matrix[i] = [];

        for (let j = 0; j < matrixCols; j++) {

            let num1 = Math.abs(i - starRow);
            let num2 = Math.abs(j - starCol); 

            let num = num1 <= num2 ? num2 + 1 : num1 + 1;

             matrix[i][j] = num;
        }
    }
    console.log(matrix.map(x => x.join(` `)).join(`\n`));
}
orbit([5, 3, 1, 2])