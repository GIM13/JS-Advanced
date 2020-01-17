function validityChecker([x1, y1, x2, y2]) {

    if (Math.sqrt(x1 ** 2 + y1 ** 2) % 1 === 0) {

        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);

    } else {

        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);

    }

    if (Math.sqrt(x2 ** 2 + y2 ** 2) % 1 === 0) {

        console.log(`{${x2}, ${y2}} to {0, 0} is valid`)

    } else {

        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);

    }

    if (Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2) % 1 === 0) {

        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);

    } else {

        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);

    }
}
validityChecker([5.3, 5.5, 5.2, 5.444]);