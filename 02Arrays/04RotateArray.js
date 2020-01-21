function rotateArray(array = []) {

    let num = +(array.pop());

    num %= array.length;

    for (let index = 0; index < num; index++) {

        let copy = array.pop();

        array.unshift(copy)
    }

    console.log(array.join(` `))
}
rotateArray(['Banana',
    'Orange',
    'Coconut',
    'Apple',
    '15']
);