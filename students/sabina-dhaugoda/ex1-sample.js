// 1.	Write a JavaScript program that accept two integers and display the larger.

function displayLarger(num1, num2) {
    if (num1 > num2) return num1;
    else if (num1 === num2) return 'none'
    else return num2;
}
console.log(displayLarger(5, 5))


// 2.Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign. 

function signNumbers(num1, num2, num3) {
    if (num1 * num2 * num3 < 0) return '-';
    else return 'no-signs'
}
console.log(signNumbers(3, -7, -2));


// 3.	Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. 

function sortNumbers() {
    let numArr = []
    for (let i = 0; i < arguments.length; i++) {
        numArr.push(arguments[i])
    }
    return numArr.sort(function (a, b) {
        return a - b
    })
}
console.log(sortNumbers(0, -1, 4));


// 4.	Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result. 

let largestNum = 0

function findLargestNum() {
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > largestNum) {
            largestNum = arguments[i]
        }
    }
    return largestNum;
}
console.log(findLargestNum(15, -2, -6, 9, -1));


// 5.	Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.

function oddOrEven() {
    for (let i = 0; i <= 15; i++) {
        if (i % 2 === 0) {
            result = i + ' is an even number'
        } else {
            result = i + ' is an odd number'
        }
        console.log(result)
    }
}
oddOrEven();


/* 6.	Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade. */


let avgGrades = ''

function grades(marks) {
    if (marks < 60) avgGrades = 'F'
    if (marks > 60 && marks < 70) avgGrades = 'D'
    if (marks > 70 && marks < 80) avgGrades = 'C'
    if (marks > 80 && marks < 90) avgGrades = 'B'
    if (marks > 90 && marks < 100) avgGrades = 'A'
    return avgGrades
}
console.log(grades(15));

/* 7. Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz". 
 */
function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz')
        } else if (i % 3 === 0) {
            console.log('Fizz')
        } else if (i % 5 === 0) {
            console.log('Buzz')
        }
    }
}
fizzBuzz();

/* 8. According to Wikipedia a happy number is defined by the following process: 
"Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers)". 
Write a JavaScript program to find and print the first 5 happy numbers.  */