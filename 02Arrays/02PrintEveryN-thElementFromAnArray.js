function printEveryNThElementFromAnArray(array = []) {

    let NThElement = +(array.pop());

    for (let index = 0; index < array.length; index += NThElement) {

        console.log(array[index]);
    }
}
printEveryNThElementFromAnArray(['5', 
'20', 
'31', 
'4', 
'20', 
'2']
);