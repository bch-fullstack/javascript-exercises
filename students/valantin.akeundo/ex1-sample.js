1. Write a JavaScript program that accept two integers and display the larger.
2. Write a JavaScript conditional statement to find the sign of product of three numbers.Display an alert box with the specified sign.
Sample numbers: 3, -7, 2
Output: The sign is -
  3. Write a JavaScript conditional statement to sort three numbers.Display an alert box to show the result.
Sample numbers: 0, -1, 4
Output: 4, 0, -1
4. Write a JavaScript conditional statement to find the largest of five numbers.Display an alert box to show the result.
Sample numbers: -5, -2, -6, 0, -1
Output: 0
5. Write a JavaScript
for loop that will iterate from 0 to 15. For each iteration, it will check
if the current number is odd or even, and display a message to the screen.
Sample Output:
  "0 is even"
"1 is odd"
"2 is even"
-- -- -- -- --
-- -- -- -- --
6. Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade.

Student Name Marks
David 80
Vinoth 77
Divya 88
Ishitha 95
Thomas 68

The grades are computed as follows:
  Range Grade <
  60 F <
  70 D <
  80 C <
  90 B <
  100 A

7. Write a JavaScript program which iterates the integers from 1 to 100. But
for multiples of three print "Fizz"
instead of the number and
for the multiples of five print "Buzz".For numbers which are multiples of both three and five print "FizzBuzz".
8. According to Wikipedia a happy number is defined by the following process:
  "Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers)".
Write a JavaScript program to find and print the first 5 happy numbers.
9. Write a JavaScript program to find the armstrong numbers of 3 digits.
Note: An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself.For example, 371 is an Armstrong number since 3 ** 3 + 7 ** 3 + 1 ** 3 = 371.
10. Write a JavaScript program to construct the following pattern, using a nested
for loop.*
  *
  *
  *
  * *
  *
  * * *
  *
  * * * *
  11. Write a JavaScript program to compute the greatest common divisor(GCD) of two positive integers.
12. Write a JavaScript program to sum the multiples of 3 and 5 under 1000.

//solution 1

function integer(a, b) {

  if (a > 0 && b > 0 && a > b) {
    document.write("The larger number is " + a);
  } else if (a > 0 && b > 0 && a < b) {
    document.write("The larger number is " + b);
  } else if (a === b && a > 0 && b > 0) {
    document.write("Both numbers are equal!")
  } else {
    document.write("Please add an integer!");

  }
}

integer(2, 4);
integer(3, 3);
integer(-2, -6);

// Solution 2 get product of 3 numbers and after compare results with zero. if results is > 0 then alert + else alert -

function getProduct(x, y, z) {


  if (x + y + z >= 0) {
    alert("The sign is +");
  } else if (x < 0 && y < 0 && z < 0) {
    alert("The sign is +");
  } else if (x > 0 && y < 0 && z < 0) {
    alert("The sign is +");
  } else if (x < 0 && y > 0 && z < 0) {
    alert("The sign is +");
  } else {
    alert("The sign is -");
  }

}
getProduct(3, -7, 2);

//solution 3


function get.Max(a, b, c); {

  if (a > 0 && b > 0 && c > 0 && a > b > c) {
    alert("The Max number is " + a);
  } else if (a > 0 && b > 0 && c > 0 && b > c > a) {
    alert("The Max number is " + b);
  } else if (a > 0 && b > 0 && c > 0 && c > b > a) {
    alert("The Max number is " + c);

  } else if (a === b === c && a > 0 && b > 0 && c > 0) {
    alert("all 3 numbers are equal!")
  } else {
    alert("Please add another number!");

  }
}
get.Max(2, 4, 8);
get.Max(3, 3, 3);
get.Max(-2, -6 - 9);

//solution 5

var number = 0;
while (number <= 15) {
  if (number % 2 === 0) {
    console.log(number + " is even number");
    number = number + 1;

  } else {
    console.log(number + " is odd number");
    number = number + 1;
  }
}

//solution 6

var students = [
  ['David', 80],
  ['Vinoth', 77],
  ['Divya', 88],
  ['Ishitha', 95],
  ['Thomas', 68]
];

var Avgmarks = 0;

for (var i = 0; i < students.length; i++) {
  Avgmarks += students[i][1];
  var avg = (Avgmarks / students.length);
}

console.log("Average grade: " + (Avgmarks) / students.length);

if (avg < 60) {
  console.log("Grade : F");
} else if (avg < 70) {
  console.log("Grade : D");
} else if (avg < 80) {
  console.log("Grade : C");
} else if (avg < 90) {
  console.log("Grade : B");
} else if (avg < 100) {
  console.log("Grade : A");
}

// solution 12

var sum = 0;
for (var x = 0; x < 1000; x++) {
  if (x % 3 === 0 || x % 5 === 0) {
    sum += x;
  }
}
console.log(sum);