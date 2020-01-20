function extractIncreasingSubsequenceFromArray(array = []) {

const result = [array[0]];

for (let index = 1; index < array.length; index++) {
    
    if (array[index] >= result[result.length - 1]) {

        result.push(array[index]);
    }
}
console.log(result.join(`\n`))
}
extractIncreasingSubsequenceFromArray([20, 
    3, 
    2, 
    15,
    6, 
    1]
    )