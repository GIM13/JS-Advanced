function greatestCommonDivisorGCD(a,b) {

    let c = a;

    if (a > b) {
        c = b;
    }

    for (let i = c; i > 0; i--) {
        if (a % i === 0 && b % i === 0) {
            console.log(i);
            break;
        };
        
    }
}

greatestCommonDivisorGCD(14,10)