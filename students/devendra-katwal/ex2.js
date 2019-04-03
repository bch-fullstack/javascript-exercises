/* 
Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

Test Data : 
console.log(first([7, 9, 0, -2])); // 7
console.log(first([],3)); // []
console.log(first([7, 9, 0, -2],3)); // [7,9,0]
console.log(first([7, 9, 0, -2],6)); // [7, 9, 0, -2]
console.log(first([7, 9, 0, -2],-3)); // [] 

*/

function first(arr, n){
    if(arr.length === 0){
        return [];
    }else if (arguments.length>1){
        return arr.splice(0,n);
    }else if (arr.length ===1){
        return arr;
    }else if (n === null || n === 'undefined'){
        return arr[0];
    }
}
console.log(first([7, 9, 0, -2])); // 7
console.log(first([],3)); // []
console.log(first([7, 9, 0, -2],3)); // [7,9,0]
console.log(first([7, 9, 0, -2],6)); // [7, 9, 0, -2]
console.log(first([7, 9, 0, -2],-3)); // [] 
console.log(first([7, 9, 0, -2],'undefined')); // [] 