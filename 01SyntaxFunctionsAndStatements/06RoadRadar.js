function roadRadar([speed,area]) {

    const limit = {
        motorway : 130,
        interstate : 90,
        city : 50,
        residential : 20
    }

    let result = ``;

    if (limit[area] < speed) {
        
        let overspeed = speed - limit[area];

        if (overspeed <= 20) {
            
            result = `speeding`;

        }else if (overspeed <= 40) {
            
            result = `excessive speeding`;
            
        }else if (overspeed > 40) {
            
            result = `reckless driving`;
            
        }
    }

    return result;
}
console.log(roadRadar([200, 'motorway']))