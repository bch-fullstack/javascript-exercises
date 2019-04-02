/*
Write a simple JavaScript program to join all elements of the following array into a string.

Sample array : 
var myText = ['This', 'is', 'not', 'working'];
joinArray(myText);

Expected Output : 
This is not working
 */

function joinArray(input) {
    var index = 0, 
        result = '';

    while(index < input.length){
        result = result + ' ' + input[index];
        index++;
    }

    return result;
}

function joinArray(input) {
    return input.join(' ');
}