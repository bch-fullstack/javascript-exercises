function largestOfFive(arr){
    var greatestNumber=arr[0];

    for(i=1;i<arr.length;i++){
        if(arr[i] > arr[0]){
           greatestNumber= arr[i]

        }

    }
return greatestNumber;
}
console.log(largestOfFive([15,24,-7,9]))