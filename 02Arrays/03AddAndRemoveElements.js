function addAndRemoveElements(array = []) {

    const result = [];

    for (let i = 0; i < array.length; i++) {

        if (array[i] === `add`) {

            result.push(i+1);

        } else if (array[i] === `remove`) {

            result.pop();
        }
    }
    console.log(result.length !== 0 ? result.join(`\n`) : `Empty`);
}
addAndRemoveElements(['remove', 
'remove', 
'remove']

)