const input = require("readline-sync");

function power(base, exp){
    let result = 1;
    for(let i = 1; i <= exp; i++)
        result *= base;
    return result;
}

let exponent = input.question("Enter the exponent of base 2 : ");
exponent = parseInt(exponent);
console.log("2^"+exponent+"="+power(2, exponent));