// 2.	Write a JavaScript conditional statement to find the sign of product of three numbers.
//  Display an alert box with the specified sign. 

function findSign(a,b,s){
    let product = a*b*s;
    if (product < 0){
        return '-'
    }else{
        return '+'
    }
}

console.log(findSign(1,-2,-4));
