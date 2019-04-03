// 6.	Write a JavaScript program which compute, the average marks of the following students Then, 
// this average is used to determine the corresponding grade.

// Student Name    	Marks
// David   			80
// Vinoth  			77
// Divya   			88
// Ishitha 			95
// Thomas  			68

// The grades are computed as follows:
// Range   		Grade
// <60 		    F
// <70 		    D
// <80 		    C
// <90 		    B
// <100    		A'

let marks = { 
 
'David':80,
'Vinoth':77,
'Divya':88,
'Ishitha' :95,
'Thomas' :68,
}
function gradeCalculator(input){
let num = []
for(item in input){
    num.push(input[item]);
}
return num
}
console.log(gradeCalculator(marks));