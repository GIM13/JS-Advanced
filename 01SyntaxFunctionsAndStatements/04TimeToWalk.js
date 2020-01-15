function timeToWalk(steps, stepsLenght, speed ) {

    let road = steps * stepsLenght / 1000;
    let seconds = Math.ceil(((road / speed) * 60 + Math.floor(road / 0.5)) * 60);
    
    let result = new Date(null, null, null, null, null, seconds)

    return result.toTimeString().split(` `)[0] ;
}
console.log(timeToWalk(4000, 0.60, 5));