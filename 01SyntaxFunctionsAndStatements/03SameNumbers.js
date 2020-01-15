function sameNumbers(num) {

    let sum = 0;
    let same = true;

    for (let index = 0; index < num.toString().length; index++) {

        sum += +(num.toString()[index]);

        if (num.toString()[0] !== num.toString()[index]) {
            same = false;
        }
    }
    console.log(same);
    console.log(sum);
}  
sameNumbers(1234)