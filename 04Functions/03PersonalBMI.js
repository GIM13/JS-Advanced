function personalBMI(...args) {

    const person = {};

    person.name = args[0];
    person.personalInfo = {
        age : args[1],
        weight: args[2],
        height: args[3]
    };
    person.BMI = Math.round (args[2] / (args[3] / 100) ** 2);

if (person.BMI < 18.5) {
    person.status = `underweight`;
}else if (person.BMI < 25) {
    person.status = `normal`;
}else if (person.BMI < 30) {
    person.status = `overweight`;
}else if (person.BMI >= 30) {
    person.status = `obese`;
    person.recommendation = `admission required`;
}

    return person
}
console.log(personalBMI('Ivan', 20, 55, 200));
