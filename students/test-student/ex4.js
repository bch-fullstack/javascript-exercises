/* 
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits. If the function is passed a valid PIN string, return true, else return false. 

validatePIN(1234); // false
validatePIN(00004324); // false
validatePIN('2312'); // true
validatePin('asd123'); // false
validatePin('000010'); // true
 */

function validatePIN(input) {
    if (typeof(input) !== 'string') {
        return false;
    } 

    // it is a number Number(input) returns false if it is not entirely a number
    // make sure it contains no dot input.indexOf('.') returns value of greater 
    // than -1 if found a dot
    // make sure it has length of either 4 or 6
    // input.length === 4 || input.length === 6
}
