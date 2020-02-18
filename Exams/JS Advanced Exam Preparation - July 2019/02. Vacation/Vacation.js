class Vacation {
    constructor(organizer, destination, budget) {
        this.organizer = organizer;
        this.destination = destination;
        this.budget = +budget;
        this.kids = {};
    }

    registerChild(name, grade, budget) {

        if (+budget < this.budget) {
            return `${name}'s money is not enough to go on vacation to ${this.destination}.`;
        }

        if (!this.kids[grade]) {
            this.kids[grade] = []
        }

        if (this.kids[grade].includes(`${name}-${budget}`)) {
            return `${name} is already in the list for this ${this.destination} vacation.`
        }

        this.kids[grade].push(`${name}-${budget}`);

        return this.kids[grade];
    }
    removeChild(name, grade) {

        if (this.kids[grade]) {

            let kid = this.kids[grade].filter(x => x.startsWith(name));

            if (kid[0]) {
                let index = this.kids[grade].indexOf(kid[0]);

                this.kids[grade].splice(index, 1);
            }

            return this.kids[grade];
        }
        return `We couldn't find ${name} in ${grade} grade.`;
    }

    toString() {

        let result = `${this.organizer} will take ${this.numberOfChildren} children on trip to ${this.destination}\n`;

        Object.keys(this.kids).sort((a, b) => +a - +b).map(x => {

            result += `Grade: ${x}\n`;

            let cunter = 1;

            this.kids[x].map(y => {

                result += `${cunter++}. ${y}\n`;
            });
        });
        return result;
    }

    get numberOfChildren() {

        let result = Object.keys(this.kids).reduce((acc, grade) => {

            acc += this.kids[grade].reduce((ac, child) => {
                ac += 1
                return ac;
            }, 0);
            return acc;
        }, 0);

        return result;
    }
}
let vacation = new Vacation('Mr Pesho', 'San diego', 2000);
console.log(vacation.registerChild('Gosho', 5, 2000));
console.log(vacation.registerChild('Lilly', 6, 2100));
console.log(vacation.registerChild('Pesho', 6, 2400));
console.log(vacation.registerChild('Gosho', 5, 2000));
console.log(vacation.registerChild('Tanya', 5, 6000));
console.log(vacation.registerChild('Mitko', 10, 1590));


