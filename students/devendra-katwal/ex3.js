/*
Write a simple JavaScript program to join all elements of the following array into a string.

Sample array : 
var myText = ['This', 'is', 'not', 'working'];
joinArray(myText);

Expected Output : 
This is not working
*/
function joinArray(myText){
    return myText.join(' ')
}

console.log(joinArray(['This', 'is', 'not', 'working']));