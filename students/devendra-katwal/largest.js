// 4.	Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result. 
// Sample numbers : -5, -2, -6, 0, -1 
// Output : 0 
let a = [-5, -2, -6, 0, -1 ]
function largest(input){
    let big = input.sort((a,b)=>b-a);
    return big[0];
}
let b = largest(a);
console.log(b);
console.log(largest([-5,-2,-9]));