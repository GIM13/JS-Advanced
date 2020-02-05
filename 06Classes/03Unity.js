class Rat {
    rats = [];
    constructor(name) {
        this.name = name
    }
    unite(otherRat) {
        if (otherRat instanceof Rat) {
            this.rats.push(otherRat)
        }
    }
    getRats() {
        return this.rats;
    }
    toString() {
        let result =`${this.name}`;
        result += this.rats.map(x =>`\n##${x.name}`);

        return result ;
    }
}
let firstRat = new Rat("Peter");
console.log(firstRat.getRats()); // []

firstRat.unite(new Rat("George"));
firstRat.unite(new Rat("Alex"));
console.log(firstRat.getRats());

console.log(firstRat.toString());