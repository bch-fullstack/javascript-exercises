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

/*2. Write a JavaScript conditional statement to find the sign of product of three numbers. 
Display an alert box with the specified sign. 
Sample numbers : 3, -7, 2 
Output : The sign is - */

var signOfNums = (num1, num2, num3) => {
    productNums = (num1*num2*num3);
        if (productNums < 0){
            alert ('The sign of the product is negative.')
        } else if (productNums >= 0){
            alert ('The sign of the product is positive.')
        }
};

signOfNums(3,-7,2);

/*3.	Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */

var sortInputedNumbers = (num1, num2, num3) =>{
    inputedNumbers = [num1, num2, num3];
    inputedNumbers.sort((a, b) => a - b);
    alert(inputedNumbers.reverse());
}

sortInputedNumbers(0, -1, 4);

/*4. Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result. 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

var findLargestNumber = (num1, num2, num3, num4, num5) => {
    inputedNumbers = [num1, num2, num3, num4, num5];
    inputedNumbers.sort((a, b) => a - b);
    alert(inputedNumbers[4]);
}

findLargestNumber(-5, -2, -6, 0, -1 );

/*5. Write a JavaScript for loop that will iterate from 0 to 15. 
For each iteration, it will check if the current number is odd or even, 
and display a message to the screen. 

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

/*6. Write a JavaScript program which compute, the average marks of the following students.
Then, this average is used to determine the corresponding grade.

Student Name    	Marks
David   			80
Vinoth  			77
Divya   			88
Ishitha 			95
Thomas  			68

The grades are computed as follows:
Range   		Grade
<60 		    F
<70 		    D
<80 		    C
<90 		    B
<100    		A*/

var students = [
    {name: 'David', grade: 80},
    {name: 'Vinoth', grade: 77},
    {name: 'Divya', grade: 88},
    {name: 'Ishitha', grade: 95},
    {name: 'Thomas', grade: 68},
];
  
students.forEach(function (student) {
    if (student.grade>= 90) {
        console.log(`${student.name}'s grade is A.`)
        }
    else if (student.grade>= 80) {
        console.log(`${student.name}'s grade is B.`)
        }
    else if (student.grade>= 70) {
        console.log(`${student.name}'s grade is C.`)
        }
    else if (student.grade>= 60) {
        console.log(`${student.name}'s grade is D.`)
        }
    else if (student.grade< 60){
        console.log(`${student.name}'s grade is F.`)
        }
});

/*
7. Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz". */

var myArray1=[];
 for (z=1; z<101; z++){
    if ((z % 3==0)&&(z % 5==0)) {
        myArray1.push('FizzBuzz');
    } else if (z % 3==0){
        myArray1.push('Fizz');
    } else if (z % 5==0){
        myArray1.push('Buzz');
    } else {
        myArray1.push(z);
    }
 }
console.log(myArray1);

/*
8. According to Wikipedia a happy number is defined by the following process: 
"Starting with any positive integer, replace the number by the sum of the squares of its digits, 
and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in 
a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, 
while those that do not end in 1 are unhappy numbers (or sad numbers)". 
Write a JavaScript program to find and print the first 5 happy numbers. */


/*
9. Write a JavaScript program to find the armstrong numbers of 3 digits. 
Note: An Armstrong number of three digits is an integer such that the sum of the cubes of its digits 
is equal to the number itself. For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371. 
*/


/*
10. Write a JavaScript program to construct the following pattern, using a nested for loop.
*  
* *  
* * *  
* * * *  
* * * * *  

*/



/*
11. Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers. */



 //12. Write a JavaScript program to sum the multiples of 3 and 5 under 1000. 
 var myArray1=[];
 for (z=0; z<1000; z++){
     if ((z % 3==0)&&(z % 5==0)) {
     myArray1.push(z);
     }
 }
var answer = myArray1.reduce((partial_sum, a) => partial_sum + a); 
console.log(`${answer} is the sum of all the numbers divisible by 3 and 5 under 1000.`);
