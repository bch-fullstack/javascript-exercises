/*Write a JavaScript program which iterates the integers from 1 to 100. 
But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". 
For numbers which are multiples of both three and five print "FizzBuzz*/

function fizzyBuzzy(){
    for(i=0;i<101;i++){
        if(i%15 === 0)console.log("fizzbuzz");
        else if(i%3 === 0)console.log("fizz");
        else if(i%5 === 0)console.log("buzz");
        else console.log(i);
    }}
    console.log(fizzyBuzzy());