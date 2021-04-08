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

let number = input.question("Enter the number : ");
number = parseInt(number);
(checkPrime(number)) ? console.log(number + " is prime") 
                     : console.log(number + " is not prime");