function isOdd(numbers){
    for(i=0; i< numbers.length;i++){
        if(numbers[i]%2 === 0){
            console.log(numbers[i]+ " is even"); ;
        }
        else{
            console.log(numbers[i]+ " is odd");
        }
    }
}
console.log(isOdd([20,56,7,8,9]));