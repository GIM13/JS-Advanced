function cookingByNumbers(array) {

    let num = +array[0];

    for (let i = 1; i < array.length; i++) {

        if (array[i] === `chop`){

            num /= 2;

        }else if (array[i] === `dice`){
            
            num = Math.sqrt(num)

        }else if (array[i] === `spice`){

            num += 1;

        }else if (array[i] === `bake`){

            num *= 3;

        }else if (array[i] === `fillet`){

            num *= 0.8;

        }
        console.log(num);
    }
}
cookingByNumbers(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);