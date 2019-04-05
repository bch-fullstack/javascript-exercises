// 3.	Write a JavaScript conditional statement to sort three numbers.
//  Display an alert box to show the result. 
// Sample numbers : 0, -1, 4 
// Output : 4, 0, -1 


function sortItems(input){
   return  input.sort(function(a,b){
       return b-a
   })
}



console.log(sortItems([1,4,3]));