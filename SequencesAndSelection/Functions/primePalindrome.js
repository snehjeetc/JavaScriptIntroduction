const input = require("readline-sync");

function checkPrime(number){
    let isPrime = true;
    for(let k = 2; k <= number/2; k++)
        if(number%k == 0){
            isPrime = false;
            break;
        }
    return isPrime;
}

function getPalindrome(number){
    let temp = 0;
    while(number != 0){
        temp = temp*10;
        temp += number % 10;
        number = Math.floor(number/10);
    }
    return temp;
}

let number = parseInt(input.question("Enter the number: "));
if(checkPrime(number)){
    let palindrome = getPalindrome(number);
    if(checkPrime(palindrome))
        console.log(number + " is prime, it's palindrome " + palindrome + " is also prime");
    else
    console.log(number + " is prime, it's palindrome " + palindrome + " is not prime");
}
else
    console.log(number + " is not prime");