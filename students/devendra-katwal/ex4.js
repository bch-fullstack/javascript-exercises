/* 
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits 
or exactly 6 digits. If the function is passed a valid PIN string, return true, else return false. 

validatePIN(1234); // false
validatePIN(00004324); // false
validatePIN('2312'); // true
validatePin('asd123'); // false
validatePin('000010'); // true
*/
function validatePIN(input){
    if(input.length === 4 || input.length === 6 && !isNaN(input)){
        return true
    }else {
        return false
    }
}

console.log(validatePIN(1234)); // false
console.log(validatePIN(00004324)); // false
console.log(validatePIN('2312')); // true
console.log(validatePIN('asd123')); // false
console.log(validatePIN('000010')); // true


