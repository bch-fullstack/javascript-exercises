//	Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. 
//Sample numbers : 0, -1, 4 
//Output : 4, 0, -1 //

function sortDescending(arr){
  for (i = 1; i < arr.length; i++){
      for (j = 0; j < i; j++ ){
          if( arr[i] >= arr[j]){
              var x = arr[i];
              arr[i] = arr[j];
              arr[j] = x;
          }

      }
      return arr;
  }}




console.log(sortDescending([1,4,7]));
