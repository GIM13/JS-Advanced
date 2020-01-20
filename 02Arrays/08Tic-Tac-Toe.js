function ticTacToe(array = []) {

    const field = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ]

    let counter = 0;

    for (let i = 0; i < array.length; i++) {

        const element = array[i];
        const row = +element[0];
        const col = +element[2];

        if (field[row][col] !== false) {

            console.log(
                "This place is already taken. Please choose another!"
            )
            counter--;
        } else {

            field[row][col] = `O`;

            if (counter % 2 === 0) {

                field[row][col] = `X`;
            }
        }

        if (i > 3 && victoryCheck(field)) {

            console.log(`Player ${field[row][col]} wins!`);
            break;
        }

        if (counter === 8) {

            console.log(`The game ended! Nobody wins :(`)
            break;
        }
        counter++;
    }
    let result = field.map(x => x.join(`\t`));
    return result.join(`\n`);

    function victoryCheck(field) {
        let result = false;

        if ((field[0][0] === field[0][1] && field[0][0] === field[0][2] && field[0][0] !== false)
            || (field[1][0] === field[1][1] && field[1][0] === field[1][2] && field[1][0] !== false)
            || (field[2][0] === field[2][1] && field[2][0] === field[2][2] && field[2][0] !== false)
            || (field[0][0] === field[1][0] && field[0][0] === field[2][0] && field[0][0] !== false)
            || (field[0][1] === field[1][1] && field[0][1] === field[2][1] && field[0][1] !== false)
            || (field[0][2] === field[1][2] && field[0][2] === field[2][2] && field[0][2] !== false)
            || (field[1][1] === field[0][0] && field[1][1] === field[2][2] && field[1][1] !== false)
            || (field[1][1] === field[0][2] && field[1][1] === field[2][0] && field[1][1] !== false)) {

            result = true;
        }
        return result;
    }
}


console.log(ticTacToe([
    "0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"]
))