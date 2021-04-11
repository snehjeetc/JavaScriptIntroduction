const input = require("readline-sync");

function primeFactors(num){
    let factors = new Array();
    for(;num%2 == 0; num /= 2)
        factors.push(2);
    for(let i=3; i*i <= num; i=i+2){
        for(;num%i == 0; num /= i)
            factors.push(i);
    }
    if(num > 2)
        factors.push(num);
    return factors;
}

let number = parseInt(input.question("Enter the number: "));

let factors = primeFactors(number);
factors.unshift(1);
console.log("Prime factors: " + factors);