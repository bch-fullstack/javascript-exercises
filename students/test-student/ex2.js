/* 
Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

Test Data : 
console.log(first([7, 9, 0, -2])); // 7
console.log(first([],3)); // []
console.log(first([7, 9, 0, -2],3)); // [7,9,0]
console.log(first([7, 9, 0, -2],6)); // [7, 9, 0, -2]
console.log(first([7, 9, 0, -2],-3)); // [] 

*/
function first(input1, input2){
    if (!Array.isArray(input1)) {
        return;
    } else if (input1 === []) { // array can be empty >> return empty array
        return [];
    //second parameter is not given >> return the first element of the array
    } else if (typeof(input2) === 'undefined' || input2 === null) {
        return input1[0];
    // array has less number of elements than requested >> return all possibilities
    } else if (input1.length <= input2) {
        return input1;
    } else if (input2 < 0) { //second parameter is negative >> return emtpy array 
        return [];
    } else {
        return input1.splice(0, input2);
    }
}

