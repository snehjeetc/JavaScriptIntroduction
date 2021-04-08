const input = require("readline-sync");

function checkPalindrome(number, palindromeNumber){
    let temp = 0;
    while(number != 0){
        temp = temp*10;
        temp += number % 10;
        number = Math.floor(number/10);
    }
    if(temp == palindromeNumber)
        return true;
    else
        return false;
}

let number = parseInt(input.question("Enter the number: "));
let palindromeNumber = parseInt(input.question(`Enter the palindrome of the ${number} :`));

if(checkPalindrome(number, palindromeNumber))
    console.log("The numbers are palindrome pair");
else
    console.log("They are not palindrome pair");