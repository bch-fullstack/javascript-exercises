//	Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign. 
//Sample numbers : 3, -7, 2 
//Output : The sign is - //

function productSign(a,b,c){
    var product = a*b*c
    if(product < 0){
        alert("-");
    }
    else{
        alert("+");
    }
}
console.log(productSign(2,4,8));
