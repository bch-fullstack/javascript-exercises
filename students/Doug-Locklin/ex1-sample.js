//1. Write a JavaScript program that accept two integers and display the larger.
function displayLarger(num1, num2){
    if (num1 === num2){
        console.log("Invalid input, the numbers are equal.");
        }
    else if (num1>num2){
        console.log(num1);
    } 
    else {
        console.log(num2);
    }
}

displayLarger(34,39);

/*5. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen. 
Sample Output : 
"0" is even" 
"1 is odd" 
"2 is even" 
---------- 
---------- */
var num1 = 0;
for (num1 = 0; num1 < 16; num1++) {
    if (step % 2 == 0){
        console.log(`${num1} is even.`)
    }
    
    else {
        console.log(`${num1} is odd.`)
    }
 }

 //12. Write a JavaScript program to sum the multiples of 3 and 5 under 1000. 
 var myArray1=[];
 for (z=0; z<1000; z++){
     if ((z % 3==0)&&(z % 5==0)) {
     myArray1.push(z);
     }
 }
var answer = myArray1.reduce((partial_sum, a) => partial_sum + a); 
console.log(`${answer} is the sum of all the numbers divisible by 3 and 5 under 1000.`);