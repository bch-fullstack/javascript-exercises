/* 
Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

Test Data : 
console.log(first([7, 9, 0, -2])); // 7
console.log(first([],3)); // []
console.log(first([7, 9, 0, -2],3)); // [7,9,0]
console.log(first([7, 9, 0, -2],6)); // [7, 9, 0, -2]
console.log(first([7, 9, 0, -2],-3)); // [] 

*/
function get_the_value(array, n) {
    if(array === null){
        return 0;
    }
    else if (n === null){
        return [0];
    }
    else if  (n < 0){
        return [];
    }
    else {
        return array.slice(0, n);
    }
}
    
console.log(get_the_value([7, 90, 7]));
console.log(get_the_value([2,8,7,8,9],2))




