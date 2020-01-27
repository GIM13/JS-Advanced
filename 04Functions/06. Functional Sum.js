let add = (function () {
    let sum = 0;
    function total(num) {
        sum += num;
        return total;
    }
    total.toString = () => sum;
    return total;
})();
console.log(add(5)(5)(5)(5)(5).toString());