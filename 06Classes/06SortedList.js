class List {

    array = [];
    size = 0;

    add(num) {
        this.array.push(+num);
        this.size = this.array.length;
        return this.array.sort((a, b) => a - b).join();
    }
    remove(index) {
        if (0 <= index && index < this.array.length) {
            let result = this.array.splice(index, 1);
            this.size = this.array.length;
            return result.join();
        }
    }
    get(index) {
        if (0 <= index && index < this.array.length) {
            return +this.array.slice(index, index + 1).join();
        }
    }
}
let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
